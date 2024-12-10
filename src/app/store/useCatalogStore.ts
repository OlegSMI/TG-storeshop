// src/stores/catalogStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { getCatalogItems } from "../api/catalogAPI";

interface CatalogItem {
  good_id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  shortDescr: string;
}

interface Catalog {
  goods: CatalogItem[];
}

interface CatalogStore extends Catalog {
  isLoading: boolean;
  error: string;
}

export const useCatalogStore = defineStore("catalog", () => {
  const catalogItems = ref<CatalogStore>({
    goods: [],
    isLoading: false,
    error: "",
  });

  const fetchCatalogItems = async (id: number) => {
    catalogItems.value.isLoading = true;
    try {
      const items: Catalog = await getCatalogItems(id);
      catalogItems.value.goods = items.goods;

      return items.goods;
    } catch (err) {
      console.error("Error fetching catalog items:", err);
      catalogItems.value.error = "Что-то пошло не так. Повторите попытку";
      return [];
    } finally {
      catalogItems.value.isLoading = false;
    }
  };

  const getCatalogData = () => {
    return catalogItems.value.goods;
  };

  const getCatalogItem = (id: number) => {
    console.log(catalogItems.value);
    return catalogItems.value.goods.find((item) => item.good_id === id);
  };

  return {
    catalogItems,
    getCatalogItem,
    fetchCatalogItems,
    getCatalogData,
  };
});
