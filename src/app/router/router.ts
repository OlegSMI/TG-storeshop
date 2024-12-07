import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import History from "../../pages/History/History.vue";
import Main from "../../pages/Main/Main.vue";
import Navigate from "../../pages/Navigate/Navigate.vue";
import Product from "../../pages/Product/Product.vue";
import Profile from "../../pages/Profile/Profile.vue";

import AllComponents from "../../pages/AllComponents/AllComponents.vue";
import Basket from "../../pages/Basket/Basket.vue";
import Task from "../../pages/Task/Task.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Navigate },
  { path: "/main", component: Main },
  { path: "/all-components", component: AllComponents },
  { path: "/profile", component: Profile },
  { path: "/history", component: History },
  { path: "/product", component: Product },
  { path: "/task", component: Task },
  { path: "/basket", component: Basket },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
