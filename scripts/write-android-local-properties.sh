#!/usr/bin/env bash
# Write android/local.properties for the current machine (not committed).
set -euo pipefail

ANDROID_SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME:-$HOME/Android/Sdk}}"
PROPS_FILE="$(dirname "$0")/../HackerHolly/android/local.properties"

mkdir -p "$(dirname "$PROPS_FILE")"
echo "sdk.dir=$ANDROID_SDK_ROOT" > "$PROPS_FILE"
echo "Wrote $PROPS_FILE"
