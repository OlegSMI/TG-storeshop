import { defineStore } from "pinia";
import { ref } from "vue";
import { getOrderItems } from "../api/orderAPI";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  state: "processed" | "posted" | "cancelled";
}
interface Orders {
  orderItems: OrderItem[];
}

export const useOrderStore = defineStore("order", () => {
  const orderItems = ref<Orders>({
    orderItems: [
      {
        id: 0,
        name: "",
        price: 0,
        state: "processed",
      },
    ],
  });

  const fetchOrderItems = async () => {
    try {
      const response = await getOrderItems();
      orderItems.value = response;
    } catch (error) {
      console.error("Error fetching order items:", error);
    }
  };

  return { orderItems, fetchOrderItems };
});
