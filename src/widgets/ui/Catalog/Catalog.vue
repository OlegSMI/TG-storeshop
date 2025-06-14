<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useCatalogStore } from "@app/store/useCatalogStore";
import { useCategoryStore } from "@app/store/useCategoryStore";
import { useProfileStore } from "@app/store/useProfileStore";
import CatalogCard from "@entities/ui/CatalogCard/CatalogCard.vue";
import Loading from "@shared/ui/Loading/Loading.vue";
import Warning from "@shared/ui/Warning/Warning.vue";

const catalogStore = useCatalogStore();
const categoryStore = useCategoryStore();

const profileStore = useProfileStore();

onMounted(() => {
  catalogStore.getCatalogData();
  profileStore.featchProfileInfo();
});

const textError = computed(() => catalogStore.catalogItems.error);

const loadingState = computed(
  () =>
    catalogStore.catalogItems.isLoading || categoryStore.categoryItems.loading
);
</script>

<template>
  <div v-if="loadingState"><Loading /></div>
  <div v-else class="catalog">
    <CatalogCard
      v-for="item in catalogStore.catalogItems.goods"
      :key="item.good_id"
      :item="item"
    />
  </div>
  <transition name="scale-slide">
    <Warning v-if="textError != ''" :text="textError" />
  </transition>
</template>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 16px;
  padding: 16px;
}

.scale-slide-enter,
.scale-slide-leave-to {
  transform: scale(0);
  opacity: 0;
}

.scale-slide-enter-to,
.scale-slide-leave {
  transform: scale(1);
  opacity: 1;
}

.scale-slide-enter-active,
.scale-slide-leave-active {
  transition: all 0.3s ease;
}
</style>
