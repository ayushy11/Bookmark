import React from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex w="100%" p="3rem">
      <Flex w="50%">
        <Image src="/images/logo-bookmark.svg" pl="8rem" h="1.875rem" />
      </Flex>
      <Flex
        w="50%"
        justifyContent="center"
        alignItems="center"
        color="grayBlue"
        fontWeight="500"
        fontSize="0.875rem"
        letterSpacing="1px"
      >
        <a>
          <Text pr="3rem">FEATURES</Text>
        </a>
        <a>
          <Text pr="3rem">PRICING</Text>
        </a>
        <a>
          <Text pr="3rem">CONTACT</Text>
        </a>
        <Button w="16%" letterSpacing="1.5px" boxShadow="lg">
          LOGIN
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
