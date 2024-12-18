import HistoryPage from "@pages/HistoryPage/HistoryPage.vue";
import Main from "@pages/Main/Main.vue";
// import Navigate from "@pages/Navigate/Navigate.vue";
import Product from "@pages/Product/Product.vue";
import Profile from "@pages/Profile/Profile.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AllComponents from "@pages/AllComponents/AllComponents.vue";
import BasketPage from "@pages/BasketPage/BasketPage.vue";
import EmptyBasket from "@pages/BasketPage/EmptyBasket.vue";
import ReadyOrder from "@pages/ReadyOrder/ReadyOrder.vue";
import StubPage from "@pages/StubPage/StubPage.vue";
import Task from "@pages/Task/Task.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Main },
  { path: "/main", component: Main },
  { path: "/all-components", component: AllComponents },
  { path: "/profile", component: Profile },
  { path: "/history", component: HistoryPage },
  { path: "/product", component: Product },
  { path: "/task", component: Task },
  { path: "/basket", component: BasketPage },
  { path: "/empty-basket", component: EmptyBasket },
  { path: "/ready-order", component: ReadyOrder },
  { path: "/stub", component: StubPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
