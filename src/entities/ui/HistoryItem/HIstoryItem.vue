<script setup lang="ts">
import testHistoryImg from "@assets/testHistoryImg.svg";
import HistoryItem from "./HistoryItem.vue";
</script>

<template>
  <div class="history">
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
  padding: 16px;
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
