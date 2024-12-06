<script setup lang="ts">
import CardButton from "../../shared/ui/CardButton/CardButton.vue";
import testProductIcon from "../../assets/testProductIcon.svg";
</script>

<template>
  <div class="product">
    <div class="images">
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
    </div>
    <h1>Бейсболка BASE белая</h1>
    <CardButton :price="100" :isChecked="false" />
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
  </div>
</template>

<style scoped>
.product {
  width: 375px;
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
}

.images {
  /* width: 375px; */
  display: flex;
  overflow: auto;
  gap: 12px;

  img {
    width: 240px;
    height: 320px;
    border-radius: 12px;
  }
}

.description {
  p {
    color: #000000;
    font-weight: 400;
    margin-bottom: 12px;
  }
}
</style>
