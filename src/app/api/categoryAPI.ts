import axiosInstance from "./axiosCreate";

interface CategoryItem {
  id: number;
  name: string;
}

interface Categories {
  categoryItems: CategoryItem[];
}

export const getCategoryItems = async (): Promise<Categories> => {
  const response = await axiosInstance.get(`/category`);
  return response.data;
};
