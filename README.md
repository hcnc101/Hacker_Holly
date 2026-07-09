# Hacker_Holly

**He Said What?** — a React Native app that translates male-speak into plain English.

Paste what he said. Get the subtext he won't give you.

## Project layout

| Path | Description |
|------|-------------|
| `HackerHolly/` | React Native 0.86 app (TypeScript) |
| `scripts/setup-react-native-env.sh` | One-time system setup (JDK 17, Android SDK) |
| `scripts/create-android-avd.sh` | Optional: create an Android emulator |
| `scripts/write-android-local-properties.sh` | Generate `android/local.properties` for this machine |

## Prerequisites

- **Node.js** 22.11+ (included in this environment)
- **JDK 17** (installed by setup script)
- **Android SDK** with platform 35 and build-tools 36.0.0 (installed by setup script)

iOS builds require macOS with Xcode and are not supported in this Linux environment.

## First-time environment setup

Run once on a fresh machine or cloud agent:

```bash
bash scripts/setup-react-native-env.sh
source ~/.bashrc
```

This installs OpenJDK 17, Android command-line tools, platform-tools, Android 15 (API 35), build-tools, and configures `JAVA_HOME` / `ANDROID_HOME`.

## App development

```bash
bash scripts/write-android-local-properties.sh   # once per machine
cd HackerHolly
npm install          # if node_modules is missing
npm start            # Metro bundler
npm run android      # build & run on emulator/device (separate terminal)
npm test             # Jest unit tests
npm run lint         # ESLint
```

### Android emulator (optional)

```bash
bash scripts/create-android-avd.sh
emulator -avd ReactNative_API35 &
cd HackerHolly && npm run android
```

### Verify Android build (no device required)

```bash
cd HackerHolly/android
./gradlew assembleDebug
```

## Environment variables

After setup, your shell should have:

```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin
```

## Docs

- [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment)
- [Get started without a framework](https://reactnative.dev/docs/getting-started-without-a-framework)
