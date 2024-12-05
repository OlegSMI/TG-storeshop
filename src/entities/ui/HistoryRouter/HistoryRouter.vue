<script setup lang="ts">
import historyIcon from "./assets/historyIcon.svg";
import arrowIcon from "./assets/arrow.svg";
</script>

<template>
  <div class="history-router">
    <div class="description">
      <img :src="historyIcon" class="historyIcon" alt="" />
      <p>История заказов</p>
    </div>
    <div>
      <img :src="arrowIcon" alt="" />
    </div>
  </div>
</template>

<style scoped>
.history-router {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;
  background-color: #efefef;
}

.description {
  display: flex;
  align-items: center;

  p {
    color: #000000;
    font-weight: 400;
  }

  img {
    width: 30px;
    height: 30px;
  }
}
.historyIcon {
  margin-right: 12px;
}
</style>
