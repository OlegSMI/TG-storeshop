<script setup lang="ts">
import CardButton from "../../../shared/ui/CardButton/CardButton.vue";
defineProps<{ img: string }>();

const count = 2;
</script>

<template>
  <div class="card">
    <router-link :to="'/product'" class="router">
      <img :src="img" alt="" />
      <div class="description">
        <p class="title">Бейсболка BASE белая</p>
        <p class="text">
          Бейсболка с лого AYA ad sa d sad sa d sa dasdas d sad sad sad
        </p>
      </div>
    </router-link>

    <div class="count" v-if="count > 0">
      <p>{{ count }}</p>
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
  position: relative;
  padding: 0 0 16px 0;

  .router {
    text-decoration: none;
  }

  img {
    border-radius: 12px;
    width: 163px;
    height: 200px;
  }

  .description {
    width: 100%;
    height: 56px;
    margin: 8px 0px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .title {
    color: #000000;
    font-weight: 510;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
  }

  .text {
    margin-top: 4px;
    color: #8e8e93;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: normal;
  }

  .count {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #007aff;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: white;
      font-weight: 510;
    }
  }
}
</style>
