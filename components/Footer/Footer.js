import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Link,
  color,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Flex w="100%" p="1.6rem" bg="darkBlue" justifyContent="space-between">
      <Flex
        w="50%"
        justifyContent="center"
        alignItems="center"
        color="grayBlue"
        fontWeight="500"
        fontSize="0.875rem"
        letterSpacing="1px"
      >
        <Image src="/images/logo-bookmark-white.svg" pl="8rem" pr="3rem" h="1.875rem" />
        <a>
          <Text pr="3rem">FEATURES</Text>
        </a>
        <a>
          <Text pr="3rem">PRICING</Text>
        </a>
        <a>
          <Text pr="3rem">CONTACT</Text>
        </a>
      </Flex>
      <Flex>
        <Image src="images/icon-facebook.svg" boxSize="10" p="2" mr="2rem"  />
        <Image src="images/icon-twitter.svg" boxSize="10" p="2" mr="6rem"  />
      </Flex>
    </Flex>
  );
}

export default Footer;
