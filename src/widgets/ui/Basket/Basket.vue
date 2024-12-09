<script setup lang="ts">
import BasketItem from "@entities/ui/BasketItem/BasketItem.vue";
import BasketPrice from "@entities/ui/BasketPrice/BasketPrice.vue";

import basketItemAvatar from "@assets/basketItemAvatar.svg";
</script>

<template>
  <div>
    <BasketItem
      :img="basketItemAvatar"
      title="Бейсболка BASE белая"
      price="200"
      :count="2"
    />
    <BasketItem
      :img="basketItemAvatar"
      title="Бейсболка BASE белая"
      price="200"
      :count="2"
    />
    <BasketPrice />
  </div>
</template>

<style scoped></style>
