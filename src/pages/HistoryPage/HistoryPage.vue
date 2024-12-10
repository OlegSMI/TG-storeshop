<script setup lang="ts">
import History from "@widgets/ui/History/History.vue";
import { BackButton } from "vue-tg";
import router from "../../app/router/router";
</script>

<template>
  <div class="history">
    <History />
    <BackButton @click="router.go(-1)" />
  </div>
</template>

<style scoped>
.history {
  padding: 16px;
}
</style>
