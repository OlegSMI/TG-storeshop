<script setup lang="ts">
import { useBasketStore } from "@app/store/useBasketStore";
import { useProfileStore } from "@app/store/useProfileStore";
import Basket from "@widgets/ui/Basket/Basket.vue";
import Delivery from "@widgets/ui/Delivery/Delivery.vue";
import { storeToRefs } from "pinia";
import { onMounted, ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { BackButton, MainButton } from "vue-tg";
import { saveOrder } from "../../app/api/orderAPI";
import { CartProduct } from "../../app/store/useBasketStore";
import { ErrorResponse } from "../../shared/inerfaces/Response";
import Warning from "../../shared/ui/Warning/Warning.vue";
import EmptyBasket from "./EmptyBasket.vue";

const router = useRouter();
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

const orderInProgress = ref<boolean>();
const errorText = ref<string>("");

const profileStore = useProfileStore();
const basketStore = useBasketStore();

onMounted(() => {
  profileStore.getProfileData();
});

const createOrder = async () => {
  if (dataFromChild.value) {
    isTextAreaEmpty.value = false;
    if (totalPrice.value > profileStore.profileData.amount) {
      return;
    } else {
      orderInProgress.value = true;

      const productsToSave = items.value
        .filter((item) => item.quantity !== undefined)
        .map((item) => ({
          id: item.id,
          quantity: item.quantity as number,
        }));
      try {
        await saveOrder(dataFromChild.value, productsToSave);
        basketStore.cleanBasketStore();
        router.push("/ready-order");
      } catch (err: ErrorResponse | any) {
        errorText.value = err.response.data.detail;
      } finally {
        orderInProgress.value = false;
      }
    }
  } else {
    isTextAreaEmpty.value = true;
  }
};
</script>

<template>
  <div v-if="items.length > 0">
    <MainButton
      text="Оформить заказ"
      @click="createOrder"
      :progress="orderInProgress"
      :visible="totalPrice <= profileStore.profileData.amount"
    />
    <BackButton @click="router.go(-1)" />
    <div class="basket">
      <h1 class="title">Корзина</h1>
      <Basket />

      <Delivery
        @sendDataToGrandparent="handleDataFromChild"
        :isTextAreaEmpty="isTextAreaEmpty"
        :warning="totalPrice > profileStore.profileData.amount"
      />
      <Warning v-if="errorText != ''" :text="errorText" />
    </div>
  </div>
  <EmptyBasket v-else />
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
