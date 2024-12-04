import { createContext } from "react";
import {
  createSystemContextValue,
  defaultOptions,
  Options,
  SystemContext,
  telegramAppGlobal,
} from "./configTelegram";

export const telegramAppContext = createContext<
  ReturnType<typeof telegramAppGlobal>
>(telegramAppGlobal());

export const optionsContext = createContext<Options>(defaultOptions);

export const systemContext = createContext<SystemContext>(
  createSystemContextValue()
);
