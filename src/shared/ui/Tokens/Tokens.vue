<script setup lang="ts">
import tokenIcon from "../../assets/tokenIcon-black.svg";

defineProps<{ tokens: number }>();
</script>

<template>
  <div class="tokens">
    <p class="balance">{{ tokens }}</p>
    <img :src="tokenIcon" alt="" />
  </div>
</template>

<style scoped>
.tokens {
  display: flex;
  /* align-items: center; */
  p {
    color: #000000;
    margin-right: 4px;
  }
}
</style>
