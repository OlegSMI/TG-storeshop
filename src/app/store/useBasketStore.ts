import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";

export interface CartProduct {
  id: number;
  name: string;
  price: string;
  quantity?: number;
}

export const useBasketStore = defineStore("basket", () => {
  const items: Ref<CartProduct[]> = ref([]);

  const existingItem = (id: number) =>
    computed(() => items.value.find((item) => item.id === id));

  function addItem(product: CartProduct) {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity!++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }

  const removeItem = (productId: number) => {
    items.value = items.value.filter((item) => item.id !== productId);
  };

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
      console.log(
        `Decrementing item ${existingItem.name}, new quantity: ${existingItem.quantity}`
      );

      if (existingItem.quantity! <= 0) {
        removeItem(productId);
      }
    }
  }

  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + (item.quantity || 0), 0)
  );

  const totalPrice = computed(() => {
    return items.value.reduce(
      (total, item) => total + Number(item.price) * (item.quantity || 0),
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
