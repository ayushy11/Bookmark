import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Link,
  Input,
} from "@chakra-ui/react";
import { Container, Section } from "../library";

function Contact() {
  return (
    <Section bg="primary" zIndex="1" px="0rem">
      <Flex
        // w="60%"
        p="10"
        w="56%"
        ml="20rem"
        alignItems="center"
        justifyContent="center"
        color="white"
        flexDirection="column"
      >
        <Text
          textTransform="uppercase"
          p="5"
          letterSpacing="2.5px"
          fontSize="0.875rem"
        >
          35,000+ already joined
        </Text>
        <Heading p="5" w="68%" textAlign="center" fontWeight="500">
          Stay up-to-date with what we're doing
        </Heading>
        <Flex p="5" w="75%">
          <Input variant="filled" placeholder="Enter your email address" m="4"/>
          <Button m="4" w="50%">Contact Us</Button>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Contact;
