import axios from "../axios";

export const register = async (userData: {first_name: string; last_name: string; email: string}) => {
  try {
    let response = await axios.post(`/auth/signup`, userData);
    console.log(response, "api response");
    return response;
  } catch (error: any) {
    console.log(error, "API ERROR");
    throw error.response ? error.response.data : error;
  }
};

export const login = async (userData: any) => {
  let response = await axios.post(`/auth/login`, userData);
  console.log(response, "api response");
  return response;
};

export const verify = async () => {
    let response = await axios.patch(`/auth/verify/email`);
    console.log(response, "api response");
    return response;
  };
