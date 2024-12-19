import { App, Plugin } from "vue";
import axiosInstance from "../api/axiosCreate";
import router from "../router/router";
// import { useAuth } from "../app/api/authAPI";
import { useWebApp } from "vue-tg";

import { useAuth } from "../api/authAPI";
import { useProfileStore } from "../store/useProfileStore";

export const axios: Plugin = {
  install: async (app: App) => {
    const { getToken, removeToken } = useProfileStore();
    const { authUser } = useAuth();

    app.config.globalProperties.$http = axiosInstance;
    app.provide("$http", axiosInstance);

    axiosInstance.interceptors.request.use(
      function (config) {
        // console.log(config.url);
        const token = getToken();
        if (token) {
          config.headers["x-access-token"] = `${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;

        if (error.config.url === "/tg_auth") {
          removeToken();
          console.log("перенаправляем на нужную страницу");
          router.push("/stub");
          return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const initData = useWebApp().initData;
            console.log(initData);
            // await authUser(import.meta.env.VITE_INIT_DATA);
            await authUser(
              "user=%7B%22id%22%3A447496510%2C%22first_name%22%3A%22Sn%22%2C%22last_name%22%3A%22Sm%22%2C%22username%22%3A%22stredds%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F1jErbwnfr3Dqgs8TS_qSr5cTOxEAJdpjHuHUbZUlV7Q.svg%22%7D&chat_instance=5642767078534658986&chat_type=sender&auth_date=1734596210&signature=VhW23r45eW9V9HsT0A7_NtQCSE2YmeRqjKbpbVtOoqMmf88vgUCDc093k0jI2nETjOJk5jx3EqxRzYwIDrIWBQ&hash=367b604914c303a3a40d5e3bf9364fec0167f9793ab40b676241bd35e39084cc"
            );

            return axiosInstance(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        } else if (error.response.status === 401 && originalRequest._retry) {
          removeToken();
          console.log("перенаправляем на нужную страницу");
          // router.push("/stub");
        }
        return Promise.reject(error);
      }
    );
  },
};
