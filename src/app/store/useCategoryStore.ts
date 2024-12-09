import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryItems } from "../api/categoryAPI";

interface CategoryItem {
  id: number;
  name: string;
}

interface Categories {
  categoryItems: CategoryItem[];
}

export const useCategoryStore = defineStore("category", () => {
  const categoryItems = ref<Categories>({
    categoryItems: [
      {
        id: 0,
        name: "",
      },
    ],
  });

  const featchCategoryItems = async () => {
    try {
      categoryItems.value = await getCategoryItems();
    } catch (error) {
      console.error("Error fetching category items:", error);
    }
  };

  return {
    categoryItems,
    featchCategoryItems,
  };
});
