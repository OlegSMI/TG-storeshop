import vue from "@vitejs/plugin-vue";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDevelopment = mode === "development";

  let serverConfig;
  if (isDevelopment) {
    const SSLkey = fs.readFileSync("ssl-key.pem");
    const SSLcert = fs.readFileSync("ssl.pem");

    serverConfig = {
      https: {
        key: SSLkey,
        cert: SSLcert,
      },
      host: env.VITE_IP,
      port: 3000,
      open: true,
    };
  }

  return {
    plugins: [vue()],
    server: isDevelopment ? serverConfig : {},
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/app"),
        "@entities": path.resolve(__dirname, "src/entities"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@widgets": path.resolve(__dirname, "src/widgets"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@import "./src/app/styles/_variables.scss"; ',
    //     },
    //   },
    // },
    envPrefix: "VITE_",
  };
});
