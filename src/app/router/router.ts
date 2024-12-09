import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HistoryPage from "@pages/HistoryPage/HistoryPage.vue";
import Main from "@pages/Main/Main.vue";
import Navigate from "@pages/Navigate/Navigate.vue";
import Product from "@pages/Product/Product.vue";
import Profile from "@pages/Profile/Profile.vue";

import AllComponents from "@pages/AllComponents/AllComponents.vue";
import BasketPage from "@pages/BasketPage/BasketPage.vue";
import Task from "@pages/Task/Task.vue";
import ReadyOrder from "@pages/ReadyOrder/ReadyOrder.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Navigate },
  { path: "/main", component: Main },
  { path: "/all-components", component: AllComponents },
  { path: "/profile", component: Profile },
  { path: "/history", component: HistoryPage },
  { path: "/product", component: Product },
  { path: "/task", component: Task },
  { path: "/basket", component: BasketPage },
  { path: "/ready-order", component: ReadyOrder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
