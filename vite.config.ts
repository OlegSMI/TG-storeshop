import vue from "@vitejs/plugin-vue";
import * as fs from "fs";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync("172.22.96.1-key.pem"),
      cert: fs.readFileSync("172.22.96.1.pem"),
    },
    // host: import.meta.env.VITE_IP,
    host: "172.22.96.1",
    port: 3000,
    open: true, // Автоматически открывать браузер при запуске
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
});
