<script setup lang="ts">
import { onMounted } from "vue";

import { useCatalogStore } from "@app/store/useCatalogStore";
import testCatalogImg from "@assets/testcatalogimg.svg";
import CatalogCard from "@entities/ui/CatalogCard/CatalogCard.vue";

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.fetchCatalogItems(); // Запрашиваем данные при монтировании компонента
});

const items = [
  {
    id: "1",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
  {
    id: "2",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
  {
    id: "3",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
  {
    id: "4",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
  {
    id: "5",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
  {
    id: "6",
    name: "Бейсболка BASE белая",
    description:
      "Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad",
    price: 100,
    imgSrc: testCatalogImg,
  },
];
</script>

<template>
  <div class="catalog">
    <CatalogCard
      v-for="item in items"
      :id="item.id"
      :name="item.name"
      :desc="item.description"
      :price="item.price"
      :imgSrc="item.imgSrc"
    />
  </div>
</template>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 16px;
  padding: 16px;
}
</style>
