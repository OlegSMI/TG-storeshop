import { createApp } from "vue";
import { VueTelegramPlugin } from "vue-tg";
import App from "./App.vue";
import router from "./app/router/router";
import "./style.css";

createApp(App).use(router).use(VueTelegramPlugin).mount("#app");
