<script setup lang="ts">
import { BackButton, MainButton } from "vue-tg";
import router from "@app/router/router";
import Basket from "@widgets/ui/Basket/Basket.vue";
import Delivery from "@widgets/ui/Delivery/Delivery.vue";
</script>

<template>
  <div>
    <MainButton text="Оформить заказ" />
    <BackButton @click="router.go(-1)" />
    <div class="basket">
      <h1 class="title">Корзина</h1>
      <Basket />

      <Delivery />
    </div>
  </div>
</template>

<style scoped>
.basket {
  padding: 16px;
}

.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
