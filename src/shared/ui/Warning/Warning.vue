<script setup lang="ts">
import warningIcon from "../../assets/warningIcon.svg";
defineProps<{ text: string }>();
</script>

<template>
  <div class="warning">
    <img :src="warningIcon" alt="" />
    <p class="warning">{{ text }}</p>
  </div>
</template>

<style scoped>
.warning {
  display: flex;
  background-color: rgba(246, 181, 54, 0.13);
  border-radius: 12px;
  padding: 12px 16px;

  img {
    margin-right: 8px;
  }

  p {
    color: #000000;
    font-weight: 400;
    background-color: transparent;
    padding: 0;
  }
}
</style>
