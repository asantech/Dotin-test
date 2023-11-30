import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "https://boxapi.pod.ir/v3";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const axiosSetup = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return err;
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res?.data;
    },
    (err) => {
      return err;
    }
  );
};

axiosSetup(instance);

const defaultAxios = {
  instance,
};
export default defaultAxios;
