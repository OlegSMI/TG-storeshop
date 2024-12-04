import { PropsWithChildren, ReactElement, useEffect, useMemo } from "react";
import createStyleConfig from "./config/configStyleTelegram";
import {
  Options,
  createSystemContextValue,
  defaultOptions,
  telegramAppGlobal,
} from "./config/configTelegram";
import {
  optionsContext,
  systemContext,
  telegramAppContext,
} from "./config/telegramContext";
import useAsyncMode from "./config/useAsyncMode";

export type WebAppProviderProps = PropsWithChildren<{
  options?: Options;
}>;

const TelegramProvider = ({
  children,
  options,
}: WebAppProviderProps): ReactElement => {
  const isLoadedWithAsyncMode = useAsyncMode(!!options?.async);
  const mergedOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    [options]
  );
  const systemValue = useMemo(createSystemContextValue, []);
  const globalWebApp = useMemo(telegramAppGlobal, [isLoadedWithAsyncMode]);

  //edit---------------------
  useEffect(() => {
    createStyleConfig();
    telegramAppGlobal().MainButton.show();
    telegramAppGlobal().BackButton.show();
  }, [globalWebApp]);
  //Не должен знать о подключении кнопок-----------------

  useEffect(() => {
    if (!options?.smoothButtonsTransition) return;
    const forceHideButtons = () => {
      globalWebApp?.MainButton?.hide();
      globalWebApp?.BackButton?.hide();
    };

    window.addEventListener("beforeunload", forceHideButtons);
    return () => window.removeEventListener("beforeunload", forceHideButtons);
  }, [globalWebApp, options?.smoothButtonsTransition]);

  return (
    <systemContext.Provider value={systemValue}>
      <telegramAppContext.Provider value={globalWebApp}>
        <optionsContext.Provider value={mergedOptions}>
          {children}
        </optionsContext.Provider>
      </telegramAppContext.Provider>
    </systemContext.Provider>
  );
};
export default TelegramProvider;
