<script setup lang="ts">
import Loading from "@shared/ui/Loading/Loading.vue";
import { computed, ref } from "vue";
import { useWebAppTheme } from "vue-tg";
import { useAuth } from "./app/api/authAPI";
import { detectDevice } from "./app/config";
import { useProfileStore } from "./app/store/useProfileStore";

const loading = ref<boolean>(false);
const colorScheme = computed(() => useWebAppTheme().colorScheme.value);
// const initData = useWebApp().initData;
const { authUser } = useAuth();

const { getToken, setToken } = useProfileStore();
const deviceInfo = computed(() =>
  detectDevice().os === "macos" || detectDevice().os === "ios"
    ? "iosDeviceScheme"
    : "noiosDeviceScheme"
);

const fetchAuthUser = async () => {
  if (!getToken()) {
    loading.value = true;
    console.log("выполняем авторизацию");
    try {
      // const jwt = await authUser(initData);
      const jwt = await authUser(import.meta.env.VITE_INIT_DATA);
      setToken(jwt);
    } finally {
      loading.value = false;
    }
  }
};
fetchAuthUser();

// onMounted(() => {
//   fetchAuthUser();
// });
const mainButton = window.Telegram.WebApp.MainButton;

const { onThemeChanged } = useWebAppTheme();
onThemeChanged(
  () => (mainButton.color = colorScheme.value == "dark" ? "#3e88f7" : "#007aff")
);
</script>

<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-else :class="`${colorScheme} ${deviceInfo}`">
    <router-view></router-view>
  </div>
</template>
