import axiosInstance from "./axiosCreate";

export const getUserName = async (): Promise<string> => {
  const response = await axiosInstance.get(`/profile`);
  return response.data.data.email;
};

export const getBalance = async (): Promise<number> => {
  const response = await axiosInstance.get(`/balance`);
  return response.data.data.amount;
};
