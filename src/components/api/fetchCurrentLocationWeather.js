import { currentLocation} from "./currentLocation";

export const fetchCurrentLocationWeather=async()=>{
  try {
    const coordinates=await currentLocation();
  
  const {latitude,longitude}=coordinates;
  const response= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=FY3VRBH62QLJ32XNTXHKEJJWC&include=days&unitGroup=metric&elements=tempmax,tempmin,temp,humidity,visibility,windspeed,datetime,conditions`)
  const jsonData=await response.json();
  const reverseGeoCoding=await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=b078b0c9f37f488c9878bdab0c6b37d3`)
  const jsonReverGeocoding=await reverseGeoCoding.json();
  const data={
    place:jsonReverGeocoding.features[0].properties.county,
    wheatherReport:jsonData.days
  }
  console.log(data.place);
  return data;
}
catch (error) {
  console.log("Some error occured ",error);
}
}
