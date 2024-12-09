<script setup lang="ts">
import { onMounted } from "vue";

import { useCategoryStore } from "@app/store/useCategoryStore";
import NavBarButton from "@shared/ui/NavBarButton/NavBarButton.vue";

const cartegoryStore = useCategoryStore();

onMounted(() => {
  cartegoryStore.featchCategoryItems();
});
</script>

<template>
  <div class="navbar">
    <NavBarButton name="Одежда" :isChecked="true" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
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
