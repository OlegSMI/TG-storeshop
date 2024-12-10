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
}

export const useCatalogStore = defineStore("catalog", () => {
  const catalogItems = ref<CatalogStore>({
    goods: [
      {
        good_id: 0,
        name: "",
        img: "",
        price: "",
        quantity: "",
        shortDescr: "",
      },
    ],
    isLoading: false,
  });

  const fetchCatalogItems = async (id: number) => {
    catalogItems.value.isLoading = true;
    try {
      const items: Catalog = await getCatalogItems(id);

      catalogItems.value.goods = items.goods;
      return items.goods;
    } catch (err) {
      console.error("Error fetching catalog items:", err);
      return [];
    } finally {
      catalogItems.value.isLoading = false;
    }
  };

  const getCatalogData = () => {
    return catalogItems.value.goods;
  };

  return {
    catalogItems,
    fetchCatalogItems,
    getCatalogData,
  };
});
