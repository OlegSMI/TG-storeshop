<script setup lang="ts">
import HistoryItem from "../../../shared/ui/HistoryItem/HistoryItem.vue";
import testHistoryImg from "../../../assets/testHistoryImg.svg";
</script>

<template>
  <div>
    <p class="date">19 сентября 2024</p>
    <HistoryItem
      :img="testHistoryImg"
      text="Бейсболка BASE белая"
      status="cancelled"
      :price="-200"
      :count="2"
    />
  </div>
</template>

<style scoped>
.date {
  color: #8e8e93;
  font-weight: 510;
  text-align: left;
  padding: 16px 0 8px 0;
}
</style>
