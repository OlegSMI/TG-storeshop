import { defineStore } from "pinia";
import { ref } from "vue";

import { getUserName, getBalance } from "../api/profileAPI";

interface Profile {
  email: string;
  amount: number;
}

export const useProfileStore = defineStore("userData", () => {
  const profileData = ref<Profile>({
    email: "",
    amount: 0,
  });

  const featchProfileInfo = async () => {
    try {
      const email = await getUserName();
      const amount = await getBalance();
      profileData.value = {
        email,
        amount,
      };
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  const getProfileData = () => profileData.value;

  return { profileData, featchProfileInfo, getProfileData };
});
