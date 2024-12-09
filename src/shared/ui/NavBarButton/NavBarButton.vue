<script setup lang="ts">
// import { defineProps } from "vue";
import { useCategoryStore } from "@app/store/useCategoryStore";

interface Item {
  category_id: number;
  name: string;
  isChecked: boolean;
}

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const categoryStore = useCategoryStore();

const handleClick = () => {
  categoryStore.setActiveCategory(props.item.category_id);
};
</script>

<template>
  <button
    :class="props.item.isChecked ? 'isChecked' : 'noChecked'"
    @click="handleClick"
  >
    {{ props.item.name }}
  </button>
</template>

<style scoped>
.isChecked {
  color: var(--button-text-color);
  background-color: var(--button-color);
}

.noChecked {
  color: var(--text-color);
  background-color: var(--button-main-disabled-color);
}
</style>
