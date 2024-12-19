<script setup lang="ts">
import Loading from "@shared/ui/Loading/Loading.vue";
import { computed, ref, watch } from "vue";
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

watch(webApp, (newValue) => {
  window.Telegram.WebApp.initData = newValue;
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
window.addEventListener("message", (event) => {
  const webAppNew = event.data;
  console.log("tut");
  console.log(webApp.value);
  webApp.value = webAppNew;
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
