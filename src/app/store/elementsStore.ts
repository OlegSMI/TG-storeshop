import { defineStore } from "pinia";
import { ref } from "vue";

interface BackButton {
  text: string;
  icon: boolean;
}

interface MainButton {
  text: string;
  countAddItems: number;
}

export const useElementsStore = defineStore("elements", () => {
  const backButton = ref<BackButton>({
    text: "back",
    icon: true,
  });
  const mainButton = ref<MainButton>({
    text: "main",
    countAddItems: 0,
  });

  return {
    backButton,
    mainButton,
  };
});
