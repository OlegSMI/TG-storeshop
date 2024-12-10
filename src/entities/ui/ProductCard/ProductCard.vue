<script setup lang="ts">
import testProductIcon from "@assets/testProductIcon.svg";
import CardButton from "@shared/ui/CardButton/CardButton.vue";
import Loading from "@shared/ui/Loading/Loading.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { BackButton, MainButton } from "vue-tg";
import { ExtendItem, getExtendProduct } from "../../../app/api/productAPI";
import { useBasketStore } from "../../../app/store/useBasketStore";

const route = useRoute();
const router = useRouter();

const loading = ref<boolean>(false);
const item = ref<ExtendItem | null>(null);
const formaettedDescr = ref<string | null>(null);

const currentGoodId = Number(route.query.id);

const { existingItem, addItem, decrementItemQuantity } = useBasketStore();
const count = computed(() => existingItem(currentGoodId).value?.quantity || 0);

const mainButText = computed(() =>
  count.value > 0 ? `В корзине · ${count.value} шт.` : "Добавить в корзину"
);

const handleAddProductCart = () => {
  addItem({
    id: currentGoodId,
    name: item.value?.name || "",
    price: item.value?.price || "",
    img: item.value?.img || "",
  });
};

const handleRemProductCart = () => {
  decrementItemQuantity(currentGoodId);
};

const mainButHandler = () => {
  if (count.value > 0) {
    router.push("/basket");
  } else {
    handleAddProductCart();
  }
};

onMounted(async () => {
  loading.value = true;
  item.value = await getExtendProduct(currentGoodId);
  loading.value = false;
  console.log(item.value);

  formaettedDescr.value = item.value.descr.replace(/\n/g, "<br>");
});
</script>

<template>
  <Loading v-if="loading" />
  <div v-else class="product">
    <div class="images">
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
      <img :src="testProductIcon" alt="" />
    </div>
    <h1>{{ item?.name }}</h1>
    <CardButton
      :price="item?.price"
      :count="count"
      :visibleToken="true"
      :limitQuantity="item?.quantity"
      @addProductCart="handleAddProductCart"
      @remProductCart="handleRemProductCart"
      class="button"
    />
    <div class="description">
      <p>
        {{ item?.shortDescr }}
      </p>
      <p v-html="formaettedDescr"></p>
    </div>
    <MainButton :text="mainButText" @click="mainButHandler" />
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
