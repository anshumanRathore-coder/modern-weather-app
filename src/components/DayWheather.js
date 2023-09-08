import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
export default function DayWheather({ element }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(element.datetime);
  const dayOfWeek = date.getDay();
  // console.log("I am from day",element)
  return (
    <>
      <Box
        mt="50px"
        ml="20px"
        rounded="2em"
        width="9em"
        height="15em"
        backgroundColor="white"
        mb="3rem"
        _hover={{
          transform: "scale(1.03)", // Scale up to 110% on hover
          transition: "transform 0.5s ease", // Add a smooth transition
        }}
      >
        <Box
          roundedTop="2em"
          height="30%"
          backgroundColor="#5e82f4"
          color="white"
          fontWeight="semibold"
          fontSize="lg"
        >
          <Center>
            <VStack mt="5px">
              <Text>{element.datetime}</Text>
              <Text>{days[dayOfWeek]}</Text>
            </VStack>
          </Center>
        </Box>
        <Box as="button" onClick={onOpen} width="9em" height="70%">
          <VStack color="#5e82f4" fontWeight="bold">
            <Box>
              <HStack>
                <SunIcon boxSize="1.5em" />
                <Text fontSize="1.5em">
                  {element.tempmax}
                  <sup>o</sup>C
                </Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <MoonIcon boxSize="1.5em" />
                <Text fontSize="1.5em">
                  {element.tempmin}
                  <sup>o</sup>C
                </Text>
              </HStack>
            </Box>
            <Box>
              <Text fontSize="1em">{element.conditions}</Text>
            </Box>
          </VStack>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2em">
          <VStack>
            <ModalCloseButton />
            <ModalHeader
              width="80%"
              mt="25px"
              backgroundColor="#5e82f4"
              rounded="2em"
              color="white"
              fontWeight="bold"
            >
              <Center>
                <VStack mt="5px">
                  <Text>{element.datetime}</Text>
                  <Text>{days[dayOfWeek]}</Text>
                </VStack>
              </Center>
            </ModalHeader>
          </VStack>
          <ModalBody>
            <Box
              rounded="2em"
              color="#5e82f4"
              backgroundColor="white"
              height="20em"
              width="20em"
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
                    {element.temp}
                    <sup>o</sup>C
                  </Text>
                  <Text>{element.humidity}</Text>
                  <Text>{element.windspeed}km/h</Text>
                  <Text>{element.visibility} Km/h</Text>
                  <Text>
                    {element.tempmax}
                    <sup>o</sup>C
                  </Text>
                  <Text>
                    {element.tempmin}
                    <sup>o</sup>C
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
