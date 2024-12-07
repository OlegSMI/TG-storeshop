import { createPinia } from "pinia";
import { createApp } from "vue";
import { VueTelegramPlugin } from "vue-tg";
import App from "./App.vue";
import router from "./app/router/router";
import "./style.css";

import "./style.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueTelegramPlugin)
  .mount("#app");
