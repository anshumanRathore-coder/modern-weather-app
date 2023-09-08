//import charkra-ui components
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
//import GrLocation icon from react-icons
import {GrLocation} from "react-icons/gr";
import { useState } from "react";

export default function Navbar({dispatch}) {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange=(event)=>{
    setInputValue(event.target.value);
  }
  const handleSearch=()=>{
    dispatch({type:"searchCity",value:inputValue})
  }
  const handleLocation=()=>{
    dispatch({type:"currentLocation",value:true});
  }

  return (
    <>
      <Box backgroundColor="#d7defa">
        <Flex direction={["column","row"]} height={["7rem","5rem"]} gap={5} justify={"center"} align={"center"}>
          <InputGroup width="300px">
            <Input onChange={handleOnChange} rounded='1em' backgroundColor="white" type="search" placeholder="City" />
            <InputRightElement width="70px">
              <Button onClick={handleSearch} rounded="1em" colorScheme="purple" size="md">
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button onClick={handleLocation} rounded="1em" leftIcon={<GrLocation />} colorScheme="telegram" size="md">Your location wheather</Button>
        </Flex>
      </Box>
    </>
  );
}
