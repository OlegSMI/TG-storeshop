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
console.log(useWebApp());
const initData = useWebApp().initData;
const { authUser } = useAuth();

const { getToken } = useProfileStore();
const deviceInfo = computed(() =>
  detectDevice().os === "macos" || detectDevice().os === "ios"
    ? "iosDeviceScheme"
    : "noiosDeviceScheme"
);
console.log(colorScheme);
console.log(initData);
const fetchAuthUser = async () => {
  if (!getToken()) {
    loading.value = true;
    console.log("выполняем авторизацию");
    try {
      await authUser(
        "user=%7B%22id%22%3A447496510%2C%22first_name%22%3A%22Sn%22%2C%22last_name%22%3A%22Sm%22%2C%22username%22%3A%22stredds%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F1jErbwnfr3Dqgs8TS_qSr5cTOxEAJdpjHuHUbZUlV7Q.svg%22%7D&chat_instance=5642767078534658986&chat_type=sender&auth_date=1734596210&signature=VhW23r45eW9V9HsT0A7_NtQCSE2YmeRqjKbpbVtOoqMmf88vgUCDc093k0jI2nETjOJk5jx3EqxRzYwIDrIWBQ&hash=367b604914c303a3a40d5e3bf9364fec0167f9793ab40b676241bd35e39084cc"
      );
      // await authUser(import.meta.env.VITE_INIT_DATA);
      router.push("/");
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

window.addEventListener("message", (event) => {
  console.log(event);
  const appId = event.data;
  console.log("Получен app_id:", appId);
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
