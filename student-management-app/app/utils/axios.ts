import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

let headers: any = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 401) {
      if (
        (error.response.data.detail =
          "No active account found with the given credentials")
      ) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
