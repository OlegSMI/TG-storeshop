<script setup lang="ts">
import warningIcon from "../../assets/warningIcon.svg";
defineProps<{ text: string }>();
</script>

<template>
  <div class="warning">
    <img :src="warningIcon" alt="" />
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.warning {
  display: flex;
  background-color: var(--atention-color);
  border-radius: 12px;
  padding: 12px 16px;
  margin: 16px;

  img {
    margin-right: 8px;
  }

  div {
    color: var(--text-color);
    font-weight: 400;
    background-color: transparent;
    padding: 0;
  }
}
</style>
