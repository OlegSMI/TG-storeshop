<script setup lang="ts">
import Tokens from "../../../shared/ui/Tokens/Tokens.vue";

// Импортируйте и определите иконки
import addItemIconWhite from "../../../shared/assets/addItemIcon-white.svg";
import delItemIconWhite from "../../../shared/assets/delItemIcon-white.svg";

interface Props {
  img: string;
  title: string;
  price: string;
  count: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="basket-item">
    <img :src="props.img" alt="Image of {{ props.title }}" />
    <div class="description">
      <p class="title">{{ props.title }}</p>
      <Tokens :tokens="Number(props.price)" />
    </div>
    <button class="count">
      <img :src="delItemIconWhite" alt="Удалить" />
      <p>{{ props.count }}</p>
      <img :src="addItemIconWhite" alt="Добавить" />
    </button>
  </div>
</template>

<style scoped>
.basket-item {
  width: 375px;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  align-items: center;

  padding: 8px 16px;

  img {
    margin-right: 12px;
    border-radius: 12px;
  }
}

.description {
  p {
    color: #000000;
    font-weight: 510;
    margin-bottom: 4px;
  }
}

.count {
  background-color: #007aff;

  img {
    margin: 0px 4px;
  }

  p {
    margin: 0px 8px;
  }
}
</style>
