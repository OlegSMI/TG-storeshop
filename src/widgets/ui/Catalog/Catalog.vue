<script setup lang="ts">
import { onMounted } from "vue";

import { useCatalogStore } from "../../../app/store/catalogStore";
import { CatalogCard } from "../../../entities";

import testCatalogImg from "../../../assets/testcatalogimg.svg";

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.fetchCatalogItems(); // Запрашиваем данные при монтировании компонента
});
</script>

<template>
  <div class="catalog">
    <!-- <div v-if="catalogStore.loading" class="info">Загрузка...</div>
    <div v-if="catalogStore.error" class="info">
      Ошибка: {{ catalogStore.error.message }}
    </div> -->

    <CatalogCard
      v-for="item in catalogStore.items"
      :key="item.id"
      :img="testCatalogImg"
    />
    <!-- <CatalogCard :img="testCatalogImg" />
    <CatalogCard :img="testCatalogImg" />
    <CatalogCard :img="testCatalogImg" /> -->
  </div>
</template>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 17px;
  padding: 16px 0 0 0;

  .info {
    color: #000000;
  }
}
</style>
