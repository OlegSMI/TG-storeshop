import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Navigate from "../../pages/Navigate/Navigate.vue";
import Main from "../../pages/Main/Main.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Navigate },
  { path: "/main", component: Main },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
