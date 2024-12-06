<script setup lang="ts">
import HistoryItem from "../../entities/ui/HistoryItem/HistoryItem.vue";

import testHistoryImg from "../../assets/testHistoryImg.svg";
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
</template>

<style scoped>
.history {
  color: #8e8e93;
  width: 375px;

  h1 {
    padding: 16px 16px 8px 0;
  }
}

.date {
  color: #8e8e93;
  font-weight: 510;
  text-align: left;
  padding: 16px 0 8px 0;
}

.history-items {
  display: grid;
  gap: 16px;
}
</style>
