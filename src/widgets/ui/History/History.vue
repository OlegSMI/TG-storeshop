<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useOrderStore } from "@app/store/useOrderStore";
import HistoryItem from "@shared/ui/HistoryItem/HistoryItem.vue";
import Loading from "@shared/ui/Loading/Loading.vue";
import { useRouter } from "vue-router";
import { BackButton } from "vue-tg";
import { convertDateToString } from "../../../shared/helpers/dateConverter";
import { Order } from "../../../shared/inerfaces/OrderHistory";
import HistoryEmpty from "./HistoryEmpty.vue";

const router = useRouter();
const orders = ref<Order[]>();

const store = useOrderStore();
const { fetchOrderItems, getOrders, getLoadingStatus } = store;

onMounted(async () => {
  await fetchOrderItems();
  orders.value = getOrders();
});
</script>

<template>
  <BackButton @click="router.go(-1)" />
  <div v-if="getLoadingStatus()">
    <Loading />
  </div>
  <HistoryEmpty v-else-if="orders?.length == 0" />
  <div v-else>
    <h1 class="title">История заказов</h1>

    <div v-for="item in orders">
      <p class="date">{{ convertDateToString(item.created_at) }}</p>
      <HistoryItem
        :id="item.goods.good_id"
        :img="item.goods.img"
        :text="item.goods.name"
        :status="item.goods.status"
        :price="-Number(item.goods.price)"
        :count="item.goods.quantity"
      />
    </div>
  </div>
</template>

<style scoped>
.date {
  color: #8e8e93;
  font-weight: 510;
  text-align: left;
  padding: 16px 0 8px 0;
}
.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
