<script setup lang="ts">
import RouterItem from "../../shared/ui/RouterItem/RouterItem.vue";

import kitchenRouterIcon from "../../assets/router/kitchenRouterIcon.svg";
import storeRouterIcon from "../../assets/router/storeRouterIcon.svg";
import taskRouterIcon from "../../assets/router/taskRouterIcon.svg";
</script>

<template>
  <div class="navigate">
    <RouterItem
      :img="kitchenRouterIcon"
      title="Kitchen"
      text="Бронирования еды и столов"
      route="/main"
    />
    <RouterItem
      :img="storeRouterIcon"
      title="Store"
      text="Внутренний маркетплейс"
      route="/main"
    />
    <RouterItem :img="taskRouterIcon" title="Task" text="" route="/" />
    <RouterItem
      :img="taskRouterIcon"
      title="All components"
      text=""
      route="/all-components"
    />
  </div>
</template>

<style scoped>
.navigate {
  display: grid;
  gap: 12px;
}
</style>
