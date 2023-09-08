// imoprt componenets
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import WeekWheather from "./components/WeekWheather";
import {fetchCurrentLocationWeather} from "./components/api/fetchCurrentLocationWeather";
import {fetchCurrentCityWeather} from './components/api/fetchCurrentCityWeather'
// import hooks
import { useEffect, useState,useReducer } from "react";
import SpinnerUi from "./components/SpinnerUi.js";
// function
export default function App() {
  const reducer = (wheatherLocation, action) => {
    switch (action.type){
      case "currentLocation":
        return { yourLocation: action.value, city: "" };
      case "searchCity":
        return { yourLocation:wheatherLocation.yourLocation, city: action.value };
      default:
        return wheatherLocation
    }
  };
  const [wheatherLocation, dispatch] = useReducer(reducer, {
    yourLocation: true,
    city: "",
  });
  const [todayWeatherReport,setTodayWeatherReport]=useState(null);
  const [futureWeatherReport,setfutureWeatherReport]=useState(null);
  useEffect(() => {
    console.log("I am fired")
    // setTodayWeatherReport(null);
    // setfutureWeatherReport(null);
   const getWeatherData=async()=>{
    if(wheatherLocation.yourLocation){
      const data=await fetchCurrentLocationWeather();
      // console.log(data.place)
      setTodayWeatherReport({
        place:data.place,
        weather:data.wheatherReport[0]
      })
      setfutureWeatherReport(data.wheatherReport.slice(1))
      dispatch({type:"currentLocation",value:false})
    }
    else if(wheatherLocation.city!==""){
      const data=await fetchCurrentCityWeather(wheatherLocation.city);
      setTodayWeatherReport({
        place:data.place,
        weather:data.wheatherReport[0]
      })
      setfutureWeatherReport(data.wheatherReport.slice(1))
    }
   }
   getWeatherData();
  }, [wheatherLocation]); // Use an empty dependency array to run this effect only once when the component mounts

  return (
    <>
      <Navbar dispatch={dispatch}/>
      {(()=>{
        if(todayWeatherReport && futureWeatherReport){
          return(
          <>
          <TodayWeather todayWeatherReport={todayWeatherReport}/>
          <WeekWheather futureWeatherReport={futureWeatherReport}/>
          </>
          )
        }else{
          return(
          <SpinnerUi/>
          )
        }
      })()}
    </>
  );
}
