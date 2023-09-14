//import charkra-ui components
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
//import GrLocation icon from react-icons
import { GrLocation } from "react-icons/gr";
import { useRef, useState } from "react";

export default function Navbar({ dispatch }) {
  const toast = useToast();
  const refInput = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearch = () => {
    if(inputValue===""){
      toast({
        description: "Search box is empty",
        status: "warning",
        duration: 4000,
        isClosable: true,
        // refInput.current.value=""
      });
    }
    else{
    dispatch({ type: "searchCity", value: inputValue });
    toast({
      description: "Your location weather updated",
      status: "success",
      duration: 4000,
      isClosable: true,
      // refInput.current.value=""
    });
  }
  };
  const handleLocation = () => {
    dispatch({ type: "currentLocation", value: true });
    toast({
      description: "Your location weather updated",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box backgroundColor="#d7defa">
        <Flex
          direction={["column", "row"]}
          height={["7rem", "5rem"]}
          gap={5}
          justify={"center"}
          align={"center"}
        >
          <InputGroup width="300px">
            <Input
              onChange={handleOnChange}
              rounded="1em"
              backgroundColor="white"
              type="search"
              placeholder="City"
              ref={refInput}
            />
            <InputRightElement width="70px">
              <Button
                onClick={handleSearch}
                rounded="1em"
                colorScheme="purple"
                size="md"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={handleLocation}
            rounded="1em"
            leftIcon={<GrLocation />}
            colorScheme="telegram"
            size="md"
          >
            Your location wheather
          </Button>
        </Flex>
      </Box>
    </>
  );
}
