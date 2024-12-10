<script setup lang="ts">
import addItemIconWhite from "@shared/assets/addItemIcon-white.svg";
import delItemIconWhite from "@shared/assets/delItemIcon-white.svg";
import Tokens from "@shared/ui/Tokens/Tokens.vue";
import { useBasketStore } from "../../../app/store/useBasketStore";
interface Props {
  id: number;
  img: string;
  title: string;
  price: string;
  count: number;
}

const props = defineProps<Props>();
// Импортируйте и определите иконки

const { addItem, decrementItemQuantity } = useBasketStore();

const handleAddProductCart = () => {
  addItem({
    id: props.id,
    name: props.title,
    price: props.price,
  });
};

const handleRemProductCart = () => {
  decrementItemQuantity(props.id);
};
</script>

<template>
  <div class="basket-item">
    <img :src="props.img" alt="Image of {{ props.title }}" />
    <div class="description">
      <p class="title">{{ props.title }}</p>
      <Tokens :tokens="Number(props.price)" />
    </div>
    <button class="count">
      <img
        :src="delItemIconWhite"
        alt="Удалить"
        @click="handleRemProductCart"
      />
      <p class="count-text">{{ props.count }}</p>
      <img
        :src="addItemIconWhite"
        alt="Добавить"
        @click="handleAddProductCart"
      />
    </button>
  </div>
</template>

<style scoped>
.basket-item {
  /* width: 375px; */
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  align-items: center;

  padding: 8px 0;

  img {
    margin-right: 12px;
    border-radius: 12px;
    cursor: pointer;
  }
}

.description {
  p {
    color: var(--text-color);
    font-weight: 510;
    margin-bottom: 4px;
  }
}

.count {
  background-color: var(--button-color);

  img {
    margin: 0px 4px;
  }

  p {
    margin: 0px 8px;
  }

  .count-text {
    color: #ffffff;
  }
}
</style>
