<template>
  <system-context-provider :value="systemValue">
    <telegram-app-context-provider :value="globalWebApp">
      <options-context-provider :value="mergedOptions">
        <slot></slot>
      </options-context-provider>
    </telegram-app-context-provider>
  </system-context-provider>
</template>

<script>
import { computed, onMounted, watch } from "vue";
import createStyleConfig from "./config/configStyleTelegram";
import {
  createSystemContextValue,
  defaultOptions,
  telegramAppGlobal,
} from "./config/configTelegram";
import useAsyncMode from "./config/useAsyncMode";

export default {
  name: "TelegramProvider",
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const isLoadedWithAsyncMode = useAsyncMode(!!props.options?.async);

    const mergedOptions = computed(() => {
      return {
        ...defaultOptions,
        ...props.options,
      };
    });

    const systemValue = computed(() => createSystemContextValue());
    const globalWebApp = computed(() => telegramAppGlobal());

    // Side effects
    onMounted(() => {
      createStyleConfig();
      globalWebApp.value.MainButton.show();
      globalWebApp.value.BackButton.show();
    });

    watch(globalWebApp, (newValue) => {
      if (props.options?.smoothButtonsTransition) {
        const forceHideButtons = () => {
          newValue.MainButton.hide();
          newValue.BackButton.hide();
        };

        window.addEventListener("beforeunload", forceHideButtons);
        return () =>
          window.removeEventListener("beforeunload", forceHideButtons);
      }
    });

    return {
      systemValue,
      globalWebApp,
      mergedOptions,
    };
  },
};
</script>
