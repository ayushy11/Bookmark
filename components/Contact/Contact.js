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
        w="50%"
        ml="20rem"
        alignItems="center"
        justifyContent="center"
        color="white"
        flexDirection="column"
      >
        <Text textTransform="uppercase">35,000+ already joined</Text>
        <Heading>Stay up-to-date with what we're doing</Heading>
        <Input variant="filled" placeholder="Enter your email address" />
        <Button fontWeight="400">Contact Us</Button>
      </Flex>
    </Section>
  );
}

export default Contact;
