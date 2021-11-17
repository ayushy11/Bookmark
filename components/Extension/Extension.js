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
import Card from "./Card";

function Extension() {
  return (
    <Section bg="#f9f9f9" zIndex="1" px="0rem" w={{xs:"150%",sm:"100%"}}>
      <Flex
        border="2px solid purple"
        w={{ xs: "100%", sm: "100%" }}
        flexDirection={{ xs: "column", sm: "column" }}
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
            fontSize={{ xs: "3rem", sm: "2rem" }}
            p={{ xs: "0rem", sm: "0.5rem" }}
            color="primaryBlue"
            fontFamily=""
            lineHeight={{ sm: "1" }}
          >
            Download the extension
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "center" }}
            p={{ xs: "0.8rem", sm: "0.5rem" }}
            color="grayBlue"
            fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
          >
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </Text>
        </Flex>
        <Flex
          border="2px solid green"
          flexDirection={{ xs: "column", sm: "row" }}
          w={{ xs: "100%", sm: "100%" }}
          alignItems="center"
        >
          <Card
            logo="/images/logo-chrome.svg"
            title="add to chrome"
            version="Minimum version 62"
          />
          <Card
            logo="/images/logo-firefox.svg"
            title="add to firefox"
            version="Minimum version 55"
            position="3rem"
          />
          <Card
            logo="/images/logo-opera.svg"
            title="add to opera"
            version="Minimum version 46"
            position="6rem"
          />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Extension;
