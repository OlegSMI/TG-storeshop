<script setup lang="ts">
import Loading from "@shared/ui/Loading/Loading.vue";
import { computed, ref } from "vue";
import { useWebApp, useWebAppTheme } from "vue-tg";
import { useAuth } from "./app/api/authAPI";
import { detectDevice } from "./app/config";
import router from "./app/router/router";
import { useProfileStore } from "./app/store/useProfileStore";

const loading = ref<boolean>(false);
const colorScheme = computed(() => useWebAppTheme().colorScheme.value);
console.log("Приложение запущено ");

const webApp = ref<any>(null);
const initData = ref<string>("");
const { getToken } = useProfileStore();
const deviceInfo = computed(() =>
  detectDevice().os === "macos" || detectDevice().os === "ios"
    ? "iosDeviceScheme"
    : "noiosDeviceScheme"
);
const { authUser } = useAuth();

const fetchAuthUser = async () => {
  if (!getToken()) {
    loading.value = true;
    console.log("выполняем авторизацию");
    try {
      await authUser(initData.value);
      // await authUser(import.meta.env.VITE_INIT_DATA);
      router.push("/");
    } finally {
      loading.value = false;
    }
  }
};
console.log("Проверка логов");

function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;

  script.onload = function () {
    if (callback) callback();
  };

  document.head.appendChild(script);
}

window.addEventListener("message", (event) => {
  loadScript("https://telegram.org/js/telegram-web-app.js?56", function () {
    console.log("Скрипт тг загружен!");
  });
  console.log(event.data);
  // const webAppNew = event.data;
  // webApp.value = webAppNew;
  // window.Telegram.WebApp = webAppNew;
  console.log("watcyhing");
  console.log(window.Telegram.WebApp.initData);
  initData.value = useWebApp().initData;
  console.log(initData.value);

  const mainButton = window.Telegram.WebApp.MainButton;

  const { onThemeChanged } = useWebAppTheme();
  onThemeChanged(
    () =>
      (mainButton.color = colorScheme.value == "dark" ? "#3e88f7" : "#007aff")
  );
  fetchAuthUser();
});
</script>

<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else :class="`${colorScheme} ${deviceInfo}`">
    <router-view></router-view>
  </div>
</template>
