import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Stack,
  Heading,
  IconButton,
  VStack,
  HStack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

export default function CurrentLocationWeather({todayWeatherReport}) {
  // console.log("i am from ui",todayWeatherReport);
  return (
    <>
      <Center mt="20px">
        <Stack
          wrap="wrap"
          direction={["column", "row"]}
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
            <IconButton
              position="relative"
              left={["15rem", "17rem", "19rem"]}
              colorScheme="whiteAlpha"
              aria-label="refresh"
              icon={
                <RepeatIcon fontWeight="bold" color="#5e82f4" boxSize="2em" />
              }
            />
            <Center>
              <VStack>
                <Heading>{todayWeatherReport.place}</Heading>
                <Heading fontSize="7em" ml="5px">
                  28<sup>o</sup>C
                </Heading>
                <Heading>{todayWeatherReport.weather.conditions}</Heading>
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
                  {todayWeatherReport.weather.temp}<sup>o</sup>C
                </Text>
                <Text>{todayWeatherReport.weather.humidity}</Text>
                <Text>{todayWeatherReport.weather.windspeed}km/h</Text>
                <Text>{todayWeatherReport.weather.visibility} Km/h</Text>
                <Text>
                  {todayWeatherReport.weather.tempmax}<sup>o</sup>C
                </Text>
                <Text>
                  {todayWeatherReport.weather.tempmin}<sup>o</sup>C
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box rounded="2rem" 
          height="20em" width={["20rem", "22rem", "28rem"]}
          _hover={
            {
              transform: "scale(1.03)", // Scale up to 110% on hover
              transition: "transform 0.5s ease", // Add a smooth transition
            }
          }
          >
            <AspectRatio ratio={5 / 3.5}>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              />
            </AspectRatio>
          </Box>
        </Stack>
      </Center>
    </>
  );
}
