import { defineStore } from "pinia";
import { ref } from "vue";

import { getBalance, getUserName } from "../api/profileAPI";

interface Profile {
  email: string;
  amount: number;
}

export const useProfileStore = defineStore("userData", () => {
  const profileData = ref<Profile>({
    email: "",
    amount: 0,
  });

  const getToken = () => localStorage.getItem("token");

  const setToken = (token: string) => localStorage.setItem("token", token);

  const removeToken = () => localStorage.removeItem("token");

  const featchProfileInfo = async () => {
    try {
      const email = await getUserName();
      const amount = await getBalance();
      profileData.value.email = email;
      profileData.value.amount = amount;
    } catch (error) {
      throw error;
    }
  };

  const getProfileData = () => profileData.value;

  return {
    profileData,
    getToken,
    setToken,
    removeToken,
    featchProfileInfo,
    getProfileData,
  };
});
