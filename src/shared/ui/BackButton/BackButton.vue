<script setup lang="ts">
import backButton from "@assets/backButton.svg";
</script>

<template>
  <div class="back">
    <img :src="backButton" alt="" />
    <span>Back</span>
  </div>
</template>

<style scoped>
.back {
  height: 18px;
  width: fit-content;
  display: flex;
  align-items: center;
  /* padding: 4px; */
  gap: 9px;

  img {
    width: 9px;
    height: 18px;
  }

  span {
    color: var(--button-color);
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    /* text-align: center; */
    /* place-items: center; */
  }
}
</style>
