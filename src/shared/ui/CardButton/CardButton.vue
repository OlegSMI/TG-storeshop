<script setup lang="ts">
import addItemIconBlue from "@shared/assets/addItemIcon-blue.svg";
import addItemIconWhite from "@shared/assets/addItemIcon-white.svg";
import delItemIconWhite from "@shared/assets/delItemIcon-white.svg";
import tokenItemBlue from "@shared/assets/tokenIcon-blue.svg";
import tokenItemWhite from "@shared/assets/tokenIcon-white.svg";

defineProps<{
  price: number;
  isChecked: boolean;
}>();
</script>

<template>
  <button
    :style="{
      color: isChecked ? 'white' : '#007aff',
      backgroundColor: isChecked ? '#007aff' : '#efefef',
    }"
    @click="$emit('addProductCart')"
  >
    <img :src="isChecked ? delItemIconWhite : ''" alt="" />
    {{ price }}
    <img :src="isChecked ? tokenItemWhite : tokenItemBlue" alt="" />
    <img :src="isChecked ? addItemIconWhite : addItemIconBlue" alt="" />
  </button>
</template>

<style scoped>
button {
  img {
    margin: 4px;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
