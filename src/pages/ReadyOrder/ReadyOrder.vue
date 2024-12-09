<script setup lang="ts">
import readyOrderImg from "./readyOrderImg.svg";
</script>

<template>
  <div class="ready-order">
    <img :src="readyOrderImg" alt="" />
    <h1>readyOrderImg</h1>
    <p>С вами свяжутся</p>
  </div>
</template>

<style scoped>
.ready-order {
  padding: 16px;
  color: #000000;

  img {
    width: 80px;
    height: 80px;
  }

  h1 {
    columns: ;
  }
}
</style>
