<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  text: string;
}>();
</script>

<template>
  <div class="router">
    <img :src="img" alt="" />
    <div class="description">
      <p class="title">{{ title }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.router {
  width: 344px;
  /* height: 80px; */
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #efefef;
  border-radius: 12px;
  /* margin: 6px; */

  img {
    margin-right: 12px;
  }

  &:hover {
    cursor: pointer;
  }
}

.title {
  font-weight: 590;
  font-size: 17px;
  line-height: 22px;
  color: #000000;
}

.text {
  color: #000000;
}
</style>
