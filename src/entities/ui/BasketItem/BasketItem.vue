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

const { addItem, decrementItemQuantity } = useBasketStore();

const handleAddProductCart = () => {
  addItem({
    id: props.id,
    name: props.title,
    price: props.price,
    img: props.img,
  });
};

const handleRemProductCart = () => {
  decrementItemQuantity(props.id);
};
</script>

<template>
  <div class="basket-item">
    <img :src="props.img" alt="Image of {{ props.title }}" class="item-image" />
    <div class="description">
      <p class="title">{{ props.title }}</p>
      <Tokens :tokens="props.price" />
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
      <button
        v-if="count > 0"
        class="side-button click-rem"
        @click="handleRemProductCart"
      >
        rem
      </button>
      <button
        v-if="count > 0"
        class="side-button click-add"
        @click="handleAddProductCart"
      >
        add
      </button>
    </button>
  </div>
</template>

<style scoped lang="scss">
.basket-item {
  /* width: 375px; */
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  align-items: center;

  padding: 8px 0;

  .item-image {
    margin-right: 12px;
    border-radius: 12px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    object-fit: cover;
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
  position: relative;
  background-color: var(--button-color);
  cursor: pointer;

  img {
    margin: 0px 4px;
    width: 12px;
    height: 12px;
  }

  p {
    margin: 0px 8px;
  }

  .count-text {
    color: #ffffff;
  }
}
.side-button {
  position: absolute;
  width: 45%;
  opacity: 0;
}

.click-add {
  right: 0;
}

.click-rem {
  left: 0;
}
</style>
