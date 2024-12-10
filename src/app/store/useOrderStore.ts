import { defineStore } from "pinia";
import { ref } from "vue";
import { Order } from "../../shared/inerfaces/OrderHistory";
import { getOrderItems } from "../api/orderAPI";

export interface OrderState {
  loading: boolean;
  orders: Order[];
  error: string;
}

export const useOrderStore = defineStore("order", () => {
  const orderItems = ref<OrderState>({
    loading: false,
    orders: [],
    error: "",
  });

  const fetchOrderItems = async () => {
    setLoading(true);
    try {
      const response = await getOrderItems();
      orderItems.value.orders = response;
    } catch (error) {
      console.error("Error fetching order items:", error);
      orderItems.value.error = "Что-то пошло не так. Повторите попытку";
    } finally {
      setLoading(false);
    }
  };

  const getOrders = () => {
    return orderItems.value.orders;
  };

  const getLoadingStatus = () => orderItems.value.loading;

  const setLoading = (state: boolean) => (orderItems.value.loading = state);

  return {
    orderItems,
    fetchOrderItems,
    getOrders,
    getLoadingStatus,
    setLoading,
  };
});
