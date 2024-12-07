// src/stores/catalogStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { getCatalogItems } from "../api/catalogAPI";

//TODO: хз что приходит
interface CatalogItem {
  id: number;
  name: string;
}

export const useCatalogStore = defineStore("catalog", () => {
  const items = ref<CatalogItem[]>([]); // Массив для хранения данных
  const loading = ref<boolean>(false); // Статус загрузки
  const error = ref<Error | null>(null); // Ошибка, если она произошла

  const fetchCatalogItems = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await getCatalogItems(1);
      items.value = response;
    } catch (err) {
      // error.value = err;
      console.log(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    error,
    fetchCatalogItems,
  };
});
