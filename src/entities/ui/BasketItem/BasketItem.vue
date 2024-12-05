<script setup lang="ts">
import Tokens from "../../../shared/ui/Tokens/Tokens.vue";

import delItemIconWhite from "../../../shared/assets/delItemIcon-white.svg";
import addItemIconWhite from "../../../shared/assets/addItemIcon-white.svg";

defineProps<{
  img: string;
  title: string;
  price: string;
  count: number;
}>();
</script>

<template>
  <div class="basket-item">
    <img :src="img" alt="" />
    <div class="description">
      <p class="title">{{ title }}</p>
      <Tokens :tokens="price" />
    </div>
    <button class="count">
      <img :src="delItemIconWhite" alt="" />
      <p>{{ count }}</p>
      <img :src="addItemIconWhite" alt="" />
    </button>
  </div>
</template>

<style scoped>
.basket-item {
  width: 375px;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  align-items: center;

  padding: 8px 16px;

  img {
    margin-right: 12px;
    border-radius: 12px;
  }
}

.description {
  p {
    color: #000000;
    font-weight: 510;
    margin-bottom: 4px;
  }
}

.count {
  background-color: #007aff;

  img {
    margin: 0px 4px;
  }

  p {
    margin: 0px 8px;
  }
}
</style>
