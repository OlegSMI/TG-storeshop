<script setup lang="ts">
import { onMounted } from "vue";

import { useCatalogStore } from "@app/store/useCatalogStore";
import { useCategoryStore } from "@app/store/useCategoryStore";
import NavBarButton from "@shared/ui/NavBarButton/NavBarButton.vue";

const categoryStore = useCategoryStore();
const catalogStore = useCatalogStore();

onMounted(async () => {
  await categoryStore.featchCategoryItems();
  await catalogStore.fetchCatalogItems(
    categoryStore.categoryItems.categoryItems[0]?.category_id || 0
  );
});
</script>

<template>
  <div class="navbar">
    <div
      v-if="
        categoryStore.categoryItems.loading ||
        categoryStore.categoryItems.categoryItems.length == 0
      "
      v-for="item in 3"
      class="item"
    >
      <button :key="item" class="loading-button"></button>
    </div>
    <div
      v-else
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  padding: 16px 16px 0 16px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
.item {
  flex-grow: 1;
}
.loading-button {
  background-color: var(--button-main-disabled-color);
  width: 100%;
}
</style>
