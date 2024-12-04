import { Telegram } from "@twa-dev/types";
import { MutableRefObject } from "react";

declare global {
  interface Window {
    Telegram: Telegram;
    TelegramWebviewProxy?: any;
  }
}

export const telegramAppGlobal = () => window.Telegram.WebApp;

//
export type Options = {
  smoothButtonsTransition?: boolean;
  async?: boolean;
  smoothButtonsTransitionMs?: number;
};

export const defaultOptions: Options = {
  smoothButtonsTransition: false,
  smoothButtonsTransitionMs: 10,
};

// system telegram buttons
export type SystemContext = {
  MainButton: MutableRefObject<null | string>;
  BackButton: MutableRefObject<null | string>;
};

export const createSystemContextValue = () => ({
  MainButton: { current: null },
  BackButton: { current: null },
});
