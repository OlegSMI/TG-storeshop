import axiosInstance from "./axiosCreate";

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

export const getCatalogItems = async (slug: number): Promise<Catalog> => {
  const response = await axiosInstance.get(`/category/${slug}`);
  return response.data.data;
};
