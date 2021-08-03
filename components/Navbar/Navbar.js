import { Flex, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex w="100%" p="3rem" bg="lightblue">
      <Flex w="50%">
        <Image src="/images/logo-bookmark.svg" pl="8rem" h="1.875rem" />
      </Flex>
      <Flex w="50%" justifyContent="center" alignItems="center">
        <a>
          <Text pr="3rem">FEATURES</Text>
        </a>
        <a>
          <Text pr="3rem">PRICING</Text>
        </a>
        <a>
          <Text pr="3rem">CONTACT</Text>
        </a>
        <Button>LOGIN</Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
