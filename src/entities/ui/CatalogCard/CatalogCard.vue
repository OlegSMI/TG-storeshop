<script setup lang="ts">
import CardButton from "@shared/ui/CardButton/CardButton.vue";
import { computed } from "vue";
import { useBasketStore } from "../../../app/store/useBasketStore";

interface Item {
  good_id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  shortDescr: string;
}

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const { existingItem, addItem, decrementItemQuantity } = useBasketStore();
const count = computed(
  () => existingItem(props.item.good_id).value?.quantity || 0
);

const handleAddProductCart = () => {
  addItem({
    id: props.item.good_id,
    name: props.item.name,
    price: props.item.price,
    img: props.item.img,
  });
};

const handleRemProductCart = () => {
  decrementItemQuantity(props.item.good_id);
};
</script>

<template>
  <div class="card">
    <router-link
      :to="{ path: '/product', query: { id: item.good_id } }"
      class="router"
    >
      <div class="imgWrapper"><img :src="props.item.img" alt="" /></div>
      <div class="description">
        <p class="title">{{ props.item.name }}</p>
        <p class="text">
          {{ props.item.shortDescr }}
        </p>
      </div>
    </router-link>

    <div class="count" :class="{ 'count--visible': count > 0 }">
      <p>{{ count }}</p>
    </div>

    <CardButton
      :price="props.item.price"
      :count="count"
      :visibleToken="true"
      :limitQuantity="props.item.quantity"
      class="button"
      @addProductCart="handleAddProductCart"
      @remProductCart="handleRemProductCart"
    />
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  padding: 0 0 16px 0;

  .router {
    text-decoration: none;
  }

  .imgWrapper {
    border-radius: 12px;
    width: 100%;
    // height: 200px;
    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
    }
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
    color: var(--text-color);
    font-weight: 510;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
  }

  .text {
    margin-top: 4px;
    color: var(--hint-color);
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
    opacity: 0; /* Скрыть по умолчанию */
    transform: scale(0); /* Начальное состояние для анимации */
    transition: opacity 0.2s ease, transform 0.2s ease; /* Плавный переход */

    &.count--visible {
      opacity: 1; /* Показать при наличии */
      transform: scale(1); /* Увеличение при появлении */
    }

    p {
      color: white;
      font-weight: 510;
    }
  }
}
</style>
