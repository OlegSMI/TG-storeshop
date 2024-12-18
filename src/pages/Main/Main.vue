<script setup lang="ts">
import router from "@app/router/router";
import { useBasketStore } from "@app/store/useBasketStore";
import NavBar from "@entities/ui/NavBar/NavBar.vue";
import Catalog from "@widgets/ui/Catalog/Catalog.vue";
import Header from "@widgets/ui/Header/Header.vue";
import { storeToRefs } from "pinia";
import { computed, Ref } from "vue";
import { BackButton, MainButton } from "vue-tg";

console.log("initial");
const store = useBasketStore();

const { totalItems } = storeToRefs(store) as {
  totalItems: Ref<number>;
};

const mainButtonHandler = () => {
  router.push("/basket");
};

const computedTotalItems = computed(() => totalItems.value != 0);
const mainButtonText = computed(() => `Корзина · ${totalItems.value} шт.`);
</script>

<template>
  <div class="main">
    <MainButton
      :visible="computedTotalItems"
      :text="mainButtonText"
      @click="mainButtonHandler"
    />
    <BackButton @click="router.go(-1)" />
    <Header />
    <NavBar />
    <Catalog />
  </div>
</template>
<style scoped></style>
