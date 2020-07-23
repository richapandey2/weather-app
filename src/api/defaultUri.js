export function weatherUrl(city) {
  if (city) {
    return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`;
  }
  return `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`;
}
