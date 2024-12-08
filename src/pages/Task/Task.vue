<script setup lang="ts">
import { BackButton } from "vue-tg";
import router from "@app/router/router";
import HuggingFace from "@assets/HuggingFace.png";
</script>

<template>
  <div>
    <BackButton @click="router.go(-1)" />
    <div class="task">Страница в разработке</div>
    <img :src="HuggingFace" alt="" />
  </div>
</template>

<style scoped>
.task {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: white;
}
</style>
