<script setup lang="ts">
import BasketItem from "@entities/ui/BasketItem/BasketItem.vue";
import BasketPrice from "@entities/ui/BasketPrice/BasketPrice.vue";

import basketItemAvatar from "@assets/basketItemAvatar.svg";
import { computed } from "vue";
import { CartProduct, useBasketStore } from "../../../app/store/useBasketStore";

const { items } = useBasketStore();

const fullPriceItem = (item: CartProduct) => computed(() => Number(item.price));
</script>

<template>
  <div>
    <BasketItem
      v-for="item in items"
      :key="item.id"
      :img="basketItemAvatar"
      :title="item.name"
      :price="fullPriceItem(item)"
      :count="item.quantity"
    />
    <BasketPrice />
  </div>
</template>

<style scoped></style>
