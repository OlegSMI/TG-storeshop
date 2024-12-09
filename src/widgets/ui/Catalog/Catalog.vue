<script setup lang="ts">
import { onMounted } from "vue";

import { useCatalogStore } from "@app/store/useCatalogStore";
import testCatalogImg from "@assets/testcatalogimg.svg";
import CatalogCard from "@entities/ui/CatalogCard/CatalogCard.vue";

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.getCatalogData();
});

console.log("get", catalogStore.catalogItems.goods);
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
      v-for="item in catalogStore.catalogItems.goods"
      :key="item.good_id"
      :item="item"
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
