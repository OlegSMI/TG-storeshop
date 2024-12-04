<script setup lang="ts">
import CardButton from "../../../shared/ui/CardButton/CardButton.vue";
defineProps<{ img: string }>();
</script>

<template>
  <div class="card">
    <img :src="img" alt="" />
    <div class="description">
      <p class="title">Бейсболка BASE белая</p>
      <p class="text">Бейсболка с лого AYA</p>
    </div>

    <CardButton :price="100" :isChecked="false" class="button" />
  </div>
</template>

<style scoped>
.card {
  width: 163px;
  display: flex;
  flex-direction: column;
  align-items: start;

  img {
    border-radius: 12px;
    width: 100%;
  }

  .description {
    width: 100%;
    height: 56px;
    margin: 8px 0px;
  }

  .title {
    color: #000000;
    font-weight: 510;
  }

  .text {
    color: #8e8e93;
    font-weight: 400;
  }
}
</style>
