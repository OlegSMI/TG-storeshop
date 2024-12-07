<script setup lang="ts">
import RouterItem from "../../shared/ui/RouterItem/RouterItem.vue";

import { BackButton, MainButton, useWebAppTheme } from "vue-tg";
import kitchenRouterIcon from "../../assets/router/kitchenRouterIcon.svg";
import storeRouterIcon from "../../assets/router/storeRouterIcon.svg";
import taskRouterIcon from "../../assets/router/taskRouterIcon.svg";
console.log(useWebAppTheme());

function handleMainButton() {}

function handlerBackButton() {
  router.go(-1);
}

const routerItems = [
  {
    img: kitchenRouterIcon,
    title: "Kitchen",
    text: "Бронирования еды и столов",
    route: "/main",
  },
  {
    img: storeRouterIcon,
    title: "Store",
    text: "Внутренний маркетплейс",
    route: "/main",
  },
  {
    img: taskRouterIcon,
    title: "Task",
    text: "",
    route: "/",
  },
  {
    img: taskRouterIcon,
    title: "All components",
    text: "",
    route: "/all-components",
  },
];
</script>

<template>
  <div class="navigate">
    <RouterItem
      v-for="item in routerItems"
      :key="item.route"
      :img="item.img"
      :title="item.title"
      :text="item.text"
      :route="item.route"
    />
  </div>
  <MainButton text="you loserino" @click="handleMainButton" />
  <BackButton @click="handlerBackButton" />
</template>

<style scoped>
.navigate {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}
</style>
