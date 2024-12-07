<script setup lang="ts">
import { computed } from "vue";
import { useWebAppTheme } from "vue-tg";
import { detectDevice } from "./app/config";

const colorScheme = computed(() => useWebAppTheme().colorScheme.value);

const deviceInfo = computed(() =>
  detectDevice().os === "macos" || detectDevice().os === "ios"
    ? "iosDeviceScheme"
    : "noiosDeviceScheme"
);

const mainButton = window.Telegram.WebApp.MainButton;

const { onThemeChanged } = useWebAppTheme();
onThemeChanged(
  () => (mainButton.color = colorScheme.value == "dark" ? "#3e88f7" : "#007aff")
);
</script>

<template>
  <div :class="`${colorScheme} ${deviceInfo}`">
    <router-view></router-view>
  </div>
</template>
