import httpsService from "./https.service";

export const getSliderItems = async (url: string) => {
  const response = await httpsService.get(url);
  return response;
};
