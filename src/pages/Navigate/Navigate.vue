<script setup lang="ts">
import RouterItem from "@shared/ui/RouterItem/RouterItem.vue";

import { useWebAppTheme } from "vue-tg";
import kitchenRouterIcon from "@assets/router/kitchenRouterIcon.svg";
import storeRouterIcon from "@assets/router/storeRouterIcon.svg";
import taskRouterIcon from "@assets/router/taskRouterIcon.svg";
console.log(useWebAppTheme());

const isDev = import.meta.env.DEV;

const routerItems = [
  {
    img: kitchenRouterIcon,
    title: "Kitchen",
    text: "Бронирования еды и столов",
    route: "/task",
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
    route: "/task",
  },
  {
    img: taskRouterIcon,
    title: "All components",
    text: "",
    route: "/all-components",
    mode: !isDev,
  },
];
</script>

<template>
  <div class="navigate">
    <div v-for="item in routerItems">
      <RouterItem
        v-if="!item.mode"
        :key="item.route"
        :img="item.img"
        :title="item.title"
        :text="item.text"
        :route="item.route"
      />
    </div>
  </div>
</template>

<style scoped>
.navigate {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
</style>
