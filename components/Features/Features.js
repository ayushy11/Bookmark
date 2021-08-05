import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { Container, Section } from "../library";

function Features() {
  return (
    <Section bg="#f9f9f9" zIndex="1" px="0rem">
      <Flex
        border="2px solid purple"
        flexDirection={{ xs: "column", sm: "row-reverse" }}
        maxWidth="1440px"
        position="relative"
        height="100%"
        justifyContent={{ xs: "center", sm: "center" }}
        alignItems="center"
        // mb="8rem"
      >
        <Flex
          border="2px solid red"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "center" }}
          // justifyContent="center"
          p="2rem"
          w={{ xs: "100%", sm: "45%" }}
        //   mt={{ sm: "5rem" }}
        //   pl={{ xs: "1.8rem", sm: "10rem" }}
        >
          <Heading
            textAlign={{ xs: "center", sm: "center" }}
            fontWeight="500"
            fontSize={{ xs: "2rem", sm: "2rem" }}
            p={{ xs: "0rem", sm: "0.5rem" }}
            color="primaryBlue"
            fontFamily=""
            lineHeight={{ sm: "1" }}
          >
            Features
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "center" }}
            p={{ xs: "0.8rem", sm: "0.5rem" }}
            color="grayBlue"
            fontSize={{ xs: "0.875rem", sm: "1.2rem" }}
          >
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Text>
        </Flex>
        
      </Flex>
    </Section>
  );
}

export default Features;
