/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_IP: string;
  VITE_APP_API_URL: string;
  VITE_APP_API_TOKEN: string;
  VITE_INIT_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
