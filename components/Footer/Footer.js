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
    <Flex
      w={{ xs: "150%", sm: "100%" }}
      p="1.6rem"
      bg="darkBlue"
      justifyContent="space-between"
      alignItems="center"
      flexDir={{ xs: "column", sm: "row" }}
    >
      <Flex
        w={{ xs: "60%", sm: "50%" }}
        justifyContent="center"
        alignItems="center"
        color="grayBlue"
        fontWeight="500"
        fontSize="0.875rem"
        letterSpacing="1px"
        flexDir={{ xs: "column", sm: "row" }}
        mb={{ xs: "2rem", sm: "0" }}
      >
        <Image
          src="/images/logo-bookmark-white.svg"
          m={{ xs: "1.5rem", sm: "default" }}
          pl={{ sm: "8rem" }}
          pr={{ sm: "3rem" }}
          h={{ xs: "2rem", sm: "1.875rem" }}
        />
        <a>
          <Text
            pr={{ sm: "3rem" }}
            fontSize={{ xs: "1.3rem", sm: "1rem" }}
            mb={{ xs: "0.5rem", sm: "0" }}
          >
            FEATURES
          </Text>
        </a>
        <a>
          <Text
            pr={{ sm: "3rem" }}
            fontSize={{ xs: "1.3rem", sm: "1rem" }}
            mb={{ xs: "0.5rem", sm: "0" }}
          >
            PRICING
          </Text>
        </a>
        <a>
          <Text
            pr={{ sm: "3rem" }}
            fontSize={{ xs: "1.3rem", sm: "1rem" }}
            mb={{ xs: "0.5rem", sm: "0" }}
          >
            CONTACT
          </Text>
        </a>
      </Flex>
      <Flex flexDir="row">
        <Image
          src="images/icon-facebook.svg"
          boxSize={{ xs: "12", sm: "10" }}
          p="2"
          mr={{ sm: "2rem" }}
        />
        <Image
          src="images/icon-twitter.svg"
          boxSize={{ xs: "12", sm: "10" }}
          p="2"
          mr={{ sm: "6rem" }}
        />
      </Flex>
    </Flex>
  );
}

export default Footer;
