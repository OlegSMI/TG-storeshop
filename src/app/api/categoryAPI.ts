import axiosInstance from "./axiosCreate";

interface CategoryItem {
  category_id: number;
  name: string;
}

export const getCategoryItems = async (): Promise<CategoryItem[]> => {
  try {
    const response = await axiosInstance.get(`/category`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error; // или обработайте ошибку по-другому
  }
};
