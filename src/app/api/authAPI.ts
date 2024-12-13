import { useProfileStore } from "../store/useProfileStore";
import axiosInstance from "./axiosCreate";

export const useAuth = () => {
  const { setToken, getToken } = useProfileStore();

  const authUser = async (userData: string): Promise<string> => {
    const response = await axiosInstance.post("/tg_auth", null, {
      headers: {
        Authorization: `${userData}`,
      },
    });
    setToken(response.data.data.access_token);
    axiosInstance.defaults.headers.common["x-access-token"] = `${getToken()}`;
    return response.data.data.access_token;
  };

  return { authUser };
};
