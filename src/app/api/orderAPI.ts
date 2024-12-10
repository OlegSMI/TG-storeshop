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
