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

export const getOrderItems = async (): Promise<Order> => {
  const response = await axiosInstance.get(`/order`);
  return response.data;
};
