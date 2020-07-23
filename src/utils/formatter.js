export const changeKelvinToFahrenheit = temp => {
  return +((+temp - 273.15) * (9 / 5) + 32).toFixed(2);
};

export const convertFahrenheittoCelcius = temp => {
  return +(((+temp - 32) * 5) / 9).toFixed(2);
};
