#!/usr/bin/env bash
# Create a default Android Virtual Device for React Native development.
set -euo pipefail

AVD_NAME="${1:-ReactNative_API35}"
ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-$HOME/Android/Sdk}"

export ANDROID_SDK_ROOT
export ANDROID_HOME="$ANDROID_SDK_ROOT"
export PATH="$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin"

if avdmanager list avd | grep -q "Name: $AVD_NAME"; then
  echo "AVD '$AVD_NAME' already exists."
  exit 0
fi

echo "Creating AVD '$AVD_NAME'..."
echo no | avdmanager create avd \
  --force \
  --name "$AVD_NAME" \
  --package "system-images;android-35;google_apis;x86_64" \
  --device "pixel_7"

echo "Done. Start with: emulator -avd $AVD_NAME"
