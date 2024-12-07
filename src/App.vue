<script setup lang="ts">
import { computed } from "vue";
import { useWebAppTheme } from "vue-tg";
import { detectDevice } from "./app/config";

const { onThemeChanged } = useWebAppTheme();

const colorScheme = computed(() => useWebAppTheme().colorScheme.value);

const deviceInfo = computed(() =>
  detectDevice().os === "macos" || detectDevice().os === "ios"
    ? "iosDeviceScheme"
    : "noiosDeviceScheme"
);

onThemeChanged(() => {
  console.log(colorScheme.value);
  console.log(deviceInfo.value);
});
</script>

<template>
  <div :class="`${colorScheme} ${deviceInfo}`">
    <router-view></router-view>
  </div>
</template>
