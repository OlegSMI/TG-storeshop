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

export const useCatalogStore = defineStore("catalog", () => {
  const catalogItems = ref<Catalog>({
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
  });

  const fetchCatalogItems = async (id: number) => {
    try {
      const items: Catalog = await getCatalogItems(id);

      catalogItems.value.goods = items.goods;
      return items.goods;
    } catch (err) {
      console.error("Error fetching catalog items:", err);
      return [];
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
