import axiosInstance from "./axiosCreate";

interface Profile {
  img: string;
  name: string;
  tokensCount: number;
}

export const getProfileInfo = async (): Promise<Profile> => {
  const response = await axiosInstance.get(`/profile`);
  return response.data;
};
