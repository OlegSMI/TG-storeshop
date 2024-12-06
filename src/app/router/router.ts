import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import History from "../../pages/History/History.vue";
import Main from "../../pages/Main/Main.vue";
import Navigate from "../../pages/Navigate/Navigate.vue";
import Product from "../../pages/Product/Product.vue";
import Profile from "../../pages/Profile/Profile.vue";

import AllComponents from "../../pages/AllComponents/AllComponents.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Navigate },
  { path: "/main", component: Main },
  { path: "/all-components", component: AllComponents },
  { path: "/profile", component: Profile },
  { path: "/history", component: History },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
