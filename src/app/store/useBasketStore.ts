import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

export const useBasketStore = defineStore("basket", () => {
  const items = ref<Product[]>([]);

  const existingItem = (id: string) =>
    computed(() => items.value.find((item) => item.id === id));

  function addItem(product: Product) {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity!++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((item) => item.id !== productId);
  }

  function incrementItemQuantity(productId: number) {
    const existingItem = items.value.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity!++;
    }
  }

  function decrementItemQuantity(productId: number) {
    const existingItem = items.value.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity!--;
      if (existingItem.quantity! <= 0) {
        removeItem(productId);
      }
    }
  }

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + (item.quantity || 0), 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
  });

  return {
    items,
    addItem,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    totalItems,
    totalPrice,
    existingItem,
  };
});
