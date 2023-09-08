import { Stack } from "@chakra-ui/react";
import DayWheather from "./DayWheather";

export default function FutureWeather({ futureWeatherReport }) {
  // console.log("I am from future", futureWeatherReport);
  return (
    <>
      <Stack justify={"center"} direction="row" wrap="wrap" spacing="10px">
        {futureWeatherReport.map((element) => (
          <DayWheather key={element.datetime} element={element} />
        ))}
      </Stack>
    </>
  );
}
