<script setup lang="ts">
import { BackButton, MainButton } from "vue-tg";
import router from "@app/router/router";
import testProductIcon from "@assets/testProductIcon.svg";
import CardButton from "@shared/ui/CardButton/CardButton.vue";
</script>

<template>
  <div class="product">
    <div class="images">
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
    </div>
    <h1>Бейсболка BASE белая</h1>
    <CardButton :price="100" :isChecked="false" class="button" />
    <div class="description">
      <p>
        Плотная жаккардовая бейсболка с лого AYA синего цвета с застежкой на
        липучке и люверсами для вентиляции головы.
      </p>
      <p>
        Не успел освежить голову с утра? Бейсболка — лучшее решение! А еще
        защита от солнца и морщин.
      </p>
      <p>
        — синий цвет — 6 клиньев — лобовой шов — 6 вышивных люверсов для лучшей
        вентиляции — изогнутый козырек с полной прострочкой — контрастный кант в
        центральной части козырька — застежка на липучке
      </p>
    </div>
    <MainButton text="product" />
    <BackButton @click="router.go(-1)" />
  </div>
</template>

<style scoped>
.product {
  /* width: 100%; */
  padding: 16px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */

  h1 {
    color: var(--text-color);
  }
}

.button {
  margin: 8px 0;
}
.images {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 12px;

  img {
    width: 240px;
    height: 320px;
    border-radius: 12px;
  }
}

.description {
  width: 100%;
  p {
    color: var(--text-color);
    font-weight: 400;
    margin-bottom: 12px;
  }
}
</style>
