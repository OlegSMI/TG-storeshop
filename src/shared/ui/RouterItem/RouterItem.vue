<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  text: string;
  route: string;
}>();
</script>

<template>
  <router-link :to="route" class="router">
    <img :src="img" alt="" />
    <div class="description">
      <p class="title">{{ title }}</p>
      <p class="text">{{ text }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.router {
  width: 100%;
  /* height: 80px; */
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #efefef;
  border-radius: 12px;
  text-decoration: none;

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
