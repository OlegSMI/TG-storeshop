import { Order } from "../../shared/inerfaces/OrderHistory";
import axiosInstance from "./axiosCreate";

export const getOrderItems = async (): Promise<Order[]> => {
  const response = await axiosInstance.get(`/order`);
  return response.data.data.orders;
};

export const saveOrder = async (
  delivery: string,
  items: { id: number; quantity: number }[]
) => {
  console.log("saveOrder", delivery, items);
  // const response = await axiosInstance.post(`/order`, {
  //   delivery,
  //   goods: items,
  // });
  // return response.data;
};
