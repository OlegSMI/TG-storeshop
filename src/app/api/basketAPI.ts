import axiosInstance from "./axiosCreate";

interface Good {
  good_id: number;
  quantity: number;
}

interface Order {
  code: number;
  msg: string;
  data: Good[];
}

interface SaveOrder {
  delivery: string;
  goods: Good[];
}

export const saveOrder = async ({
  delivery,
  goods,
}: SaveOrder): Promise<Order> => {
  const response = await axiosInstance.post(`/order`, { delivery, goods });
  return response.data;
};
