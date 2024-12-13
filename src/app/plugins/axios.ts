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
        console.log("error response");
        const originalRequest = error.config;

        // if (!getToken()) {
        //   await authUser(import.meta.env.VITE_INIT_DATA);
        // }

        if (error.response.status === 401 && error.config.url === "/tg_auth") {
          removeToken();
          console.log("перенаправляем на нужную страницу");
          router.push("/stub");
          return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const initData = useWebApp().initData;
            // await authUser(import.meta.env.VITE_INIT_DATA);
            await authUser(initData);

            return axiosInstance(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        } else if (error.response.status === 401 && originalRequest._retry) {
          removeToken();
          console.log("перенаправляем на нужную страницу");
          router.push("/stub");
        }

        return Promise.reject(error);
      }
    );
  },
};
