import { changeKelvinToFahrenheit } from "../../utils/formatter";

const getPageWiseData = (data) => {
  const totalKeys = Object.keys(data);
  const totalPages = Math.round(totalKeys.length / 3);
  const app = {};
  let i = 0;
  while (i < totalPages) {
    let k = totalKeys[3] ? 3 : totalKeys.length;
    app[i] = totalKeys.splice(0, k);
    i++;
  }
  return app;
};

export const weatherTransformer = (data) => {
  const currentDate = new Date();
  const overAllDetails = {
    city: data.city.name,
    country: data.city.country,
  };
  const dataObj = {};
  data.list.forEach((date) => {
    const dat = new Date(date.dt_txt);
    const localeDate = dat.toLocaleDateString();
    const tempInFahrenheit = changeKelvinToFahrenheit(date.main.temp);
    if (
      localeDate === currentDate.toLocaleDateString() &&
      !overAllDetails.weather
    ) {
      overAllDetails.date = currentDate.toGMTString().substring(0, 16);
      overAllDetails.temp = tempInFahrenheit;
      overAllDetails.weather = date.weather[0].description;
      overAllDetails.icon = date.weather[0].icon;
    }
    if (!dataObj[localeDate]) {
      dataObj[localeDate] = {
        date: dat.toString().substring(0, 15),
        temp: tempInFahrenheit,
        weather: date.weather[0].description,
        icon: date.weather[0].icon,
        sum: tempInFahrenheit,
        count: 1,
        barChart: [
          {
            temp: +(+tempInFahrenheit).toFixed(2),
            time: dat.toLocaleTimeString().substring(0, 5),
          },
        ],
      };
    } else {
      dataObj[localeDate].barChart.push({
        temp: +(+tempInFahrenheit).toFixed(2),
        time: dat.toLocaleTimeString().substring(0, 5),
      });
      dataObj[localeDate].sum = +dataObj[localeDate].sum + +tempInFahrenheit;
      dataObj[localeDate].count += 1;
    }
  });
  return {
    pageDetails: getPageWiseData(dataObj),
    details: dataObj,
    overAllDetails,
  };
};
