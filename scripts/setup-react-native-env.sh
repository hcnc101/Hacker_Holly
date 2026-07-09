#!/usr/bin/env bash
# React Native development environment setup for Linux (headless / CI-friendly).
# Installs JDK 17, Android SDK command-line tools, and required packages.

set -euo pipefail

ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-$HOME/Android/Sdk}"
ANDROID_HOME="${ANDROID_HOME:-$ANDROID_SDK_ROOT}"

echo "==> Installing system packages (JDK 17, unzip, libc6)..."
export DEBIAN_FRONTEND=noninteractive
sudo apt-get update -qq
sudo apt-get install -y -qq openjdk-17-jdk unzip wget libc6 libncurses6

JAVA_17_HOME="/usr/lib/jvm/java-17-openjdk-amd64"
if [ ! -d "$JAVA_17_HOME" ]; then
  JAVA_17_HOME="$(dirname "$(dirname "$(readlink -f "$(command -v javac)")")")"
fi
echo "==> JDK 17 located at: $JAVA_17_HOME"

echo "==> Installing Android SDK to $ANDROID_SDK_ROOT..."
mkdir -p "$ANDROID_SDK_ROOT/cmdline-tools"

if [ ! -d "$ANDROID_SDK_ROOT/cmdline-tools/latest/bin" ]; then
  TMP_ZIP="$(mktemp /tmp/cmdline-tools.XXXXXX.zip)"
  wget -q -O "$TMP_ZIP" \
    "https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip"
  TMP_DIR="$(mktemp -d)"
  unzip -q "$TMP_ZIP" -d "$TMP_DIR"
  rm -f "$TMP_ZIP"
  mkdir -p "$ANDROID_SDK_ROOT/cmdline-tools"
  rm -rf "$ANDROID_SDK_ROOT/cmdline-tools/latest"
  mv "$TMP_DIR/cmdline-tools" "$ANDROID_SDK_ROOT/cmdline-tools/latest"
  rm -rf "$TMP_DIR"
fi

export ANDROID_SDK_ROOT ANDROID_HOME
export PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools"

echo "==> Accepting Android SDK licenses..."
yes | sdkmanager --licenses >/dev/null 2>&1 || true

echo "==> Installing Android SDK packages..."
sdkmanager --install \
  "platform-tools" \
  "platforms;android-35" \
  "build-tools;36.0.0" \
  "cmdline-tools;latest" \
  "emulator" \
  "system-images;android-35;google_apis;x86_64"

ENV_BLOCK="# React Native / Android SDK (added by scripts/setup-react-native-env.sh)
export JAVA_HOME=\"$JAVA_17_HOME\"
export ANDROID_SDK_ROOT=\"$ANDROID_SDK_ROOT\"
export ANDROID_HOME=\"\$ANDROID_SDK_ROOT\"
export PATH=\"\$PATH:\$ANDROID_HOME/emulator\"
export PATH=\"\$PATH:\$ANDROID_HOME/platform-tools\"
export PATH=\"\$PATH:\$ANDROID_HOME/cmdline-tools/latest/bin\""

for RC in "$HOME/.bashrc" "$HOME/.profile"; do
  if [ -f "$RC" ] && ! grep -q "React Native / Android SDK" "$RC" 2>/dev/null; then
    echo "" >> "$RC"
    echo "$ENV_BLOCK" >> "$RC"
    echo "==> Updated $RC"
  fi
done

# Apply to current shell
eval "$ENV_BLOCK"

echo ""
echo "==> Environment setup complete."
echo "    JAVA_HOME=$JAVA_HOME"
echo "    ANDROID_HOME=$ANDROID_HOME"
java -version 2>&1 | head -1
adb version 2>&1 | head -1 || echo "    adb: not yet on PATH (open a new shell or source ~/.bashrc)"
