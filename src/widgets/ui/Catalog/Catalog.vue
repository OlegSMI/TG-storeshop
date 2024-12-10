<script setup lang="ts">
import { onMounted } from "vue";

import { useCatalogStore } from "@app/store/useCatalogStore";
import CatalogCard from "@entities/ui/CatalogCard/CatalogCard.vue";
import Loading from "@shared/ui/Loading/Loading.vue";

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.getCatalogData();
});
</script>

<template>
  <div v-if="catalogStore.catalogItems.isLoading"><Loading /></div>
  <div v-else class="catalog">
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
