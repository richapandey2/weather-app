import { weatherTransformer } from "./Weather.Transformer";
import { weatherUrl } from "../defaultUri";

export const weatherApi = (city) => {
  return fetch(weatherUrl(city))
    .then((response) => response.json())
    .then((data) => weatherTransformer(data))
    .catch((error) => error);
};
