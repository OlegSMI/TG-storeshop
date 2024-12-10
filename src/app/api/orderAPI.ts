import { Order } from "../../shared/inerfaces/OrderHistory";
import axiosInstance from "./axiosCreate";

export const getOrderItems = async (): Promise<Order[]> => {
  const response = await axiosInstance.get(`/order`);
  return response.data.data.orders;
};
