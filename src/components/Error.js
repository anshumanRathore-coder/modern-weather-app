import React from "react";
import errorImage from "./errorImage.png";
import { Center, Image } from "@chakra-ui/react";
export default function Error() {
  return (
    <>
      <Center>
        <Image width="fit-content" src={errorImage} alt="image not found" />
      </Center>
    </>
  );
}
