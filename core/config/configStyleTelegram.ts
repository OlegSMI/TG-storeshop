import { telegramAppGlobal } from "./configTelegram";

const themeConfig = telegramAppGlobal().themeParams;

const createStyleConfig = () => {
  themeConfig.section_bg_color = "#43f53f";
  themeConfig.bg_color = "#c4c456";
  themeConfig.button_text_color = "#ffffff";
  themeConfig.button_color = "#000000";
};

export default createStyleConfig;
