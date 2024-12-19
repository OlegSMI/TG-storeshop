import router from "@app/router/router";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { VueTelegramPlugin } from "vue-tg";
import App from "./App.vue";
import "./style.css";

import { axios } from "@app/plugins/axios";
import "./style.css";

window.addEventListener("message", (event) => {
  const webApp = event.data;
  console.log(webApp);
  window.Telegram.WebApp = webApp;
});

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueTelegramPlugin)
  .use(axios)
  .mount("#app");
