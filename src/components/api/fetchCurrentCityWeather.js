export const fetchCurrentCityWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.REACT_APP_WEATHER_API}&include=days&unitGroup=metric&elements=tempmax,tempmin,temp,humidity,visibility,windspeed,datetime,conditions,,sunrise,sunset,precipprob,solarradiation,uvindex,description`
    );
    const jsonData = await response.json();
    const data = {
      place: city,
      wheatherReport: jsonData.days,
    };
    return data;
  } catch (error) {
    return error;
  }
};
