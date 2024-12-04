<script setup lang="ts">
import tokenItemBlue from "../../assets/tokenIcon-blue.svg";
import tokenItemWhite from "../../assets/tokenIcon-white.svg";
import delItemIconWhite from "../../assets/delItemIcon-white.svg";
import addItemIconBlue from "../../assets/addItemIcon-blue.svg";
import addItemIconWhite from "../../assets/addItemIcon-white.svg";

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
  >
    <img :src="isChecked && delItemIconWhite" alt="" />
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
