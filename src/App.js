// imoprt componenets
import Navbar from "./components/Navbar";
import TodayWeather from "./components/TodayWeather";
import FutureWeather from "./components/FutureWheather";
import { fetchCurrentLocationWeather } from "./components/api/fetchCurrentLocationWeather";
import { fetchCurrentCityWeather } from "./components/api/fetchCurrentCityWeather";
import SpinnerUi from "./components/SpinnerUi.js";
// import hooks
import { useEffect, useState, useReducer } from "react";
import Error from "./components/Error";
// function
export default function App() {
  const reducer = (wheatherLocation, action) => {
    switch (action.type) {
      case "currentLocation":
        return { yourLocation: action.value, city: "" };
      case "searchCity":
        return {
          yourLocation: wheatherLocation.yourLocation,
          city: action.value,
        };
      default:
        return wheatherLocation;
    }
  };
  const [wheatherLocation, dispatch] = useReducer(reducer, {
    yourLocation: true,
    city: "",
  });
  const [todayWeatherReport, setTodayWeatherReport] = useState(null);
  const [futureWeatherReport, setfutureWeatherReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorInFetchingData, setError] = useState(false);
  useEffect(() => {
    // console.log("I am fired")
    const getWeatherData = async () => {
      setLoading(false);
      setError(false);
      try {
        if (wheatherLocation.yourLocation) {
          const data = await fetchCurrentLocationWeather();
          // console.log(data.place)
          setTodayWeatherReport({
            place: data.place,
            weather: data.wheatherReport[0],
          });
          setfutureWeatherReport(data.wheatherReport.slice(1));
          dispatch({ type: "currentLocation", value: false });
        } else if (wheatherLocation.city !== "") {
          const data = await fetchCurrentCityWeather(wheatherLocation.city);
          setTodayWeatherReport({
            place: data.place,
            weather: data.wheatherReport[0],
          });
          setfutureWeatherReport(data.wheatherReport.slice(1));
        }
        setLoading(true);
      } catch (error) {
        setError(true);
      }
    };
    getWeatherData();
  }, [wheatherLocation]); // Use an empty dependency array to run this effect only once when the component mounts

  return (
    <>
      <Navbar dispatch={dispatch} />
      {(() => {
        if (
          !errorInFetchingData &&
          loading &&
          todayWeatherReport &&
          futureWeatherReport
        ) {
          return (
            <>
              <TodayWeather todayWeatherReport={todayWeatherReport} />
              <FutureWeather futureWeatherReport={futureWeatherReport} />
            </>
          );
        } else if (errorInFetchingData) {
          return <Error />;
        } else {
          return <SpinnerUi />;
        }
      })()}
    </>
  );
}
