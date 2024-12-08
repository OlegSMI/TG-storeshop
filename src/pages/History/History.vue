<script setup lang="ts">
import { BackButton, MainButton } from "vue-tg";
import router from "../../app/router/router";
import testHistoryImg from "../../assets/testHistoryImg.svg";
import HistoryItem from "../../entities/ui/HistoryItem/HistoryItem.vue";
</script>

<template>
  <div class="history">
    <h1>История заказов</h1>
    <div>
      <p class="date">19 сентября 2024</p>
    </div>
    <div class="history-items">
      <HistoryItem
        :img="testHistoryImg"
        text="Бейсболка BASE белая"
        status="posted"
        :price="-200"
        :count="2"
      />
      <HistoryItem
        :img="testHistoryImg"
        text="Бейсболка BASE белая"
        status="cancelled"
        :price="-200"
        :count="2"
      />
    </div>
  </div>
  <MainButton text="product" />
  <BackButton @click="router.go(-1)" />
</template>

<style scoped>
.history {
  padding: 16px;

  h1 {
    color: var(--text-color);
    padding: 16px 16px 8px 0;
  }
}

.date {
  color: var(--hint-color);
  font-weight: 510;
  text-align: left;
  padding: 16px 0 8px 0;
}

.history-items {
  display: grid;
  gap: 16px;
}
</style>
