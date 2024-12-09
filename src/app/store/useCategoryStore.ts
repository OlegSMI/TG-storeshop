import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryItems } from "../api/categoryAPI";

interface CategoryItem {
  category_id: number;
  name: string;
  isChecked: boolean;
}

interface Categories {
  categoryItems: CategoryItem[];
}

export const useCategoryStore = defineStore("category", () => {
  const categoryItems = ref<Categories>({
    categoryItems: [
      {
        category_id: 0,
        name: "",
        isChecked: false,
      },
    ],
  });

  const featchCategoryItems = async () => {
    try {
      const items: { category_id: number; name: string }[] =
        await getCategoryItems();
      const updatedItems = items.map((item, index) => ({
        ...item,
        isChecked: index === 0,
      }));
      categoryItems.value.categoryItems = updatedItems;
      return updatedItems;
    } catch (error) {
      console.error("Error fetching category items:", error);
      return [];
    }
  };

  const setActiveCategory = (categoryId: number) => {
    categoryItems.value.categoryItems.forEach((item) => {
      item.isChecked = item.category_id === categoryId;
    });
  };

  return {
    categoryItems,
    featchCategoryItems,
    setActiveCategory,
  };
});
