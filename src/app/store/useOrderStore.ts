import { defineStore } from "pinia";
import { ref } from "vue";
import { getOrderItems } from "../api/orderAPI";

interface Product {
  id: number;
  name: string;
  price: number;
  state: "processed" | "posted" | "cancelled";
}
interface OrderItem {
  id: number;
  items: Product[];
}

export const useOrderStore = defineStore("order", () => {
  const items = ref<OrderItem[]>([]);

  const fetchOrderItems = async () => {
    try {
      const response = await getOrderItems();
      items.value = response;
    } catch (error) {
      console.error("Error fetching order items:", error);
    }
  };
});
