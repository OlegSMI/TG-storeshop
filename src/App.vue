<script setup lang="ts">
import { BackButton, MainButton, useWebAppTheme } from "vue-tg";
import router from "./app/router/router";
console.log(useWebAppTheme());
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
