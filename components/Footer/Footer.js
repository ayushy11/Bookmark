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
      flexDir={{xs:"column",sm:"row"}}
    >
      <Flex
        w={{xs:"60%",sm:"50%"}}
        justifyContent="center"
        alignItems="center"
        color="grayBlue"
        fontWeight="500"
        fontSize="0.875rem"
        letterSpacing="1px"
        flexDir={{xs:"column",sm:"row"}}
      >
        <Image
          src="/images/logo-bookmark-white.svg"
          pl={{sm:"8rem"}}
          pr={{sm:"3rem"}}
          h="1.875rem"
        />
        <a>
          <Text pr={{sm:"3rem"}}>FEATURES</Text>
        </a>
        <a>
          <Text pr={{sm:"3rem"}}>PRICING</Text>
        </a>
        <a>
          <Text pr={{sm:"3rem"}}>CONTACT</Text>
        </a>
      </Flex>
      <Flex flexDir={{xs:"column",sm:"row"}}>
        <Image src="images/icon-facebook.svg" boxSize="10" p="2" mr={{sm:"2rem"}} />
        <Image src="images/icon-twitter.svg" boxSize="10" p="2" mr={{sm:"6rem"}} />
      </Flex>
    </Flex>
  );
}

export default Footer;
