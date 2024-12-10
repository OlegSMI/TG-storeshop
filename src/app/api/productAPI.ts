import axiosInstance from "./axiosCreate";

export interface ExtendItem {
  good_id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  descr: string;
  shortDescr: string;
  addImg: string[];
}

export const getExtendProduct = async (
  good_id: number
): Promise<ExtendItem> => {
  try {
    const response = await axiosInstance.get(`/good/${good_id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error; // или обработайте ошибку по-другому
  }
};
