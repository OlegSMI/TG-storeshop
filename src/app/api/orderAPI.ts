import axiosInstance from "./axiosCreate";

interface OrderItems {
  id: number;
  name: string;
  price: number;
  state: "processed" | "posted" | "cancelled";
}

interface Orders {
  orderItems: OrderItems[];
}

export const getOrderItems = async (): Promise<Orders> => {
  const response = await axiosInstance.get(`/order`);
  return response.data;
};
