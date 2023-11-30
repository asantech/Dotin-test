import serviceAPI from "./defaultAxios";

const httpsService = {
  get: (url: string) => {
    return serviceAPI.instance.get(url);
  },
};

export default httpsService;
