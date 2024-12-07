import axiosInstance from "./axiosCreate";

// TODO: хз что приходит
interface CatalogItem {
  id: number;
  name: string;
}

export const getCatalogItems = async (slug: number): Promise<CatalogItem[]> => {
  const response = await axiosInstance.get(`/category/${slug}`);
  return response.data;
};
