import {
  Box,
  Center,
  Stack,
  Heading,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function CurrentLocationWeather({ todayWeatherReport }) {
  // console.log("i am from ui",todayWeatherReport);
  const capitialize = (str) => {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedStr;
  };
  return (
    <>
      <Center mt="20px">
        <Stack
          wrap="wrap"
          justify="center"
          direction="row"
          spacing="24px"
          mt="10px"
          ml="10px"
        >
          <Box
            rounded="2em"
            color="#5e82f4"
            backgroundColor="white"
            height="20em"
            width={["20rem", "22rem", "24rem"]}
            _hover={{
              transform: "scale(1.03)", // Scale up to 110% on hover
              transition: "transform 0.5s ease", // Add a smooth transition
            }}
          >
            <Center mt="10px">
              <VStack>
                <Heading>{todayWeatherReport.weather.datetime}</Heading>
                <Heading>{capitialize(todayWeatherReport.place)}</Heading>
                <Heading fontSize="5em" ml="5px">
                  {todayWeatherReport.weather.temp}<sup>o</sup>C
                </Heading>
                <Heading fontSize="1.5em">
                  {todayWeatherReport.weather.conditions}
                </Heading>
              </VStack>
            </Center>
          </Box>

          <Box
            rounded="2em"
            color="#5e82f4"
            backgroundColor="white"
            height="20em"
            width="20em"
            _hover={{
              transform: "scale(1.03)", // Scale up to 110% on hover
              transition: "transform 0.5s ease", // Add a smooth transition
            }}
          >
            <HStack>
              <VStack
                mt="30px"
                ml="30px"
                fontWeight="semibold"
                fontSize="1.5em"
              >
                <Text>Felt temp</Text>
                <Text>Humidity</Text>
                <Text>Wind</Text>
                <Text>Visibility</Text>
                <Text>Max Temp</Text>
                <Text>Min Temp</Text>
              </VStack>
              <VStack
                rounded="1.5em"
                mt="30px"
                ml="30px"
                color="white"
                padding="8px"
                backgroundColor="#5e82f4"
                fontWeight="semibold"
                fontSize="1.5em"
              >
                <Text>
                  {todayWeatherReport.weather.temp}
                  <sup>o</sup>C
                </Text>
                <Text>{todayWeatherReport.weather.humidity}</Text>
                <Text>{todayWeatherReport.weather.windspeed}km/h</Text>
                <Text>{todayWeatherReport.weather.visibility} Km/h</Text>
                <Text>
                  {todayWeatherReport.weather.tempmax}
                  <sup>o</sup>C
                </Text>
                <Text>
                  {todayWeatherReport.weather.tempmin}
                  <sup>o</sup>C
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box
            rounded="2em"
            color="#5e82f4"
            backgroundColor="white"
            height="20em"
            width="20em"
            _hover={{
              transform: "scale(1.03)", // Scale up to 110% on hover
              transition: "transform 0.5s ease", // Add a smooth transition
            }}
          >
            <HStack>
              <VStack
                mt="30px"
                ml="30px"
                fontWeight="semibold"
                fontSize="1.5em"
              >
                <Text>Sun rise</Text>
                <Text>Sun set</Text>
                <Text>PercProb</Text>
                <Text>UVindex</Text>
                <Text>Radiation</Text>
              </VStack>
              <VStack
                rounded="1.5em"
                mt="30px"
                ml="30px"
                color="white"
                padding="8px"
                backgroundColor="#5e82f4"
                fontWeight="semibold"
                fontSize="1.5em"
              >
                <Text>{todayWeatherReport.weather.sunrise}</Text>
                <Text>{todayWeatherReport.weather.sunset}</Text>
                <Text>{todayWeatherReport.weather.precipprob}</Text>
                <Text>{todayWeatherReport.weather.uvindex}</Text>
                <Text>{todayWeatherReport.weather.solarradiation}W</Text>
              </VStack>
            </HStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
}
