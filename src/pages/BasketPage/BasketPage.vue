<script setup lang="ts">
import { BackButton, MainButton } from "vue-tg";
import { ref, Ref } from "vue";
import router from "@app/router/router";
import Basket from "@widgets/ui/Basket/Basket.vue";
import Delivery from "@widgets/ui/Delivery/Delivery.vue";
import { useBasketStore } from "@app/store/useBasketStore";
import { useProfileStore } from "@app/store/useProfileStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { CartProduct } from "../../app/store/useBasketStore";
import { saveOrder } from "../../app/api/orderAPI";

// const baskeStore = useBasketStore();

// const delivery = ref(null);

const dataFromChild = ref("");
const isTextAreaEmpty = ref(false);

const handleDataFromChild = (data: string) => {
  dataFromChild.value = data;
};

const { totalPrice } = storeToRefs(useBasketStore()) as {
  totalPrice: Ref<number>;
};

const { items } = storeToRefs(useBasketStore()) as {
  items: Ref<CartProduct[]>;
};

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.getProfileData();
});

const handleClick = async () => {
  if (dataFromChild.value) {
    isTextAreaEmpty.value = false;
    if (totalPrice.value > profileStore.profileData.amount) {
      return;
    } else {
      const productsToSave = items.value
        .filter((item) => item.quantity !== undefined) // Отфильтровываем элементы с undefined
        .map((item) => ({
          id: item.id,
          quantity: item.quantity as number, // Приводим к типу number
        }));
      // console.log("Заказ отправлен", items.value);
      await saveOrder(dataFromChild.value, productsToSave);
    }
  } else {
    isTextAreaEmpty.value = true;
  }
  // Здесь вы можете продолжить обработку заказа
};
</script>

<template>
  <div>
    <MainButton text="Оформить заказ" @click="handleClick" />
    <BackButton @click="router.go(-1)" />
    <div class="basket">
      <h1 class="title">Корзина</h1>
      <Basket />

      <Delivery
        @sendDataToGrandparent="handleDataFromChild"
        :isTextAreaEmpty="isTextAreaEmpty"
        :warning="totalPrice > profileStore.profileData.amount"
      />
    </div>
  </div>
</template>

<style scoped>
.basket {
  padding: 16px;
}

.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
