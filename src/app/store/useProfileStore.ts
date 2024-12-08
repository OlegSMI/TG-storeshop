import { defineStore } from "pinia";
import { ref } from "vue";

import { getProfileInfo } from "../api/profileAPI";

interface Profile {
  img: string;
  name: string;
  tokensCount: number;
}

export const useProfileStore = defineStore("userData", () => {
  const profileData = ref<Profile>({
    img: "",
    name: "",
    tokensCount: 0,
  });

  const featchProfileInfo = async () => {
    try {
      const data = await getProfileInfo();
      profileData.value = data;
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  return { profileData, featchProfileInfo };
});
