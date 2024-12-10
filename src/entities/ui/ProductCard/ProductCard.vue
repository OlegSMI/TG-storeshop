<script setup lang="ts">
import router from "@app/router/router";
import testProductIcon from "@assets/testProductIcon.svg";
import CardButton from "@shared/ui/CardButton/CardButton.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { BackButton, MainButton } from "vue-tg";
import { ExtendItem, getExtendProduct } from "../../../app/api/productAPI";

const route = useRoute();

const loading = ref<boolean>(false);
const item = ref<ExtendItem | null>(null);

console.log("loser");
onMounted(async () => {
  loading.value = true;
  item.value = await getExtendProduct(Number(route.query.id));
  loading.value = false;
  console.log(item.value);
});
</script>

<template>
  <!-- <loadi -->
  <div class="product">
    <div class="images">
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
    </div>
    <h1>{{ item?.name }}</h1>
    <CardButton :price="item?.price" :count="item?.quantity" class="button" />
    <div class="description">
      <p>
        {{ item?.shortDescr }}
      </p>
      <p>
        {{ item?.descr }}
      </p>
    </div>
    <MainButton text="Добавить в корзину" />
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
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

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
