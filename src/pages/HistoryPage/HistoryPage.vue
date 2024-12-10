<script setup lang="ts">
import History from "@widgets/ui/History/History.vue";
import { BackButton } from "vue-tg";
import router from "../../app/router/router";
</script>

<template>
  <div class="history">
    <h1 class="title">История заказов</h1>
    <History />
    <BackButton @click="router.go(-1)" />
  </div>
</template>

<style scoped>
.history {
  padding: 16px;
}
.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
