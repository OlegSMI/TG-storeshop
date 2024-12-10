<script setup lang="ts">
import BasketItem from "@entities/ui/BasketItem/BasketItem.vue";
import BasketPrice from "@entities/ui/BasketPrice/BasketPrice.vue";

import { useBasketStore } from "@app/store/useBasketStore";
import { storeToRefs } from "pinia";
import { computed, Ref } from "vue";
import { CartProduct } from "../../../app/store/useBasketStore";

const { items } = storeToRefs(useBasketStore()) as {
  items: Ref<CartProduct[]>;
};

const fullPriceItem = (item: CartProduct) => computed(() => Number(item.price));
</script>

<template>
  <div>
    <BasketItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :img="item.img"
      :title="item.name"
      :price="fullPriceItem(item)"
      :count="item.quantity"
    />
    <BasketPrice />
  </div>
</template>

<style scoped></style>
