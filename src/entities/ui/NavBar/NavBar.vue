<script setup lang="ts">
import { onMounted } from "vue";

import { useCategoryStore } from "@app/store/useCategoryStore";
import { useCatalogStore } from "@app/store/useCatalogStore";
import NavBarButton from "@shared/ui/NavBarButton/NavBarButton.vue";

const categoryStore = useCategoryStore();
const catalogStore = useCatalogStore();

onMounted(async () => {
  await categoryStore.featchCategoryItems();
  await catalogStore.fetchCatalogItems(
    categoryStore.categoryItems.categoryItems[0].category_id
  );
});
</script>

<template>
  <div class="navbar">
    <div
      v-for="item in categoryStore.categoryItems.categoryItems"
      :key="item.category_id"
      class="item"
    >
      <NavBarButton :item="item" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  padding: 16px 16px 0 16px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
</style>
