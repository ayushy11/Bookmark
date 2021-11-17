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
    <Section bg="primary" zIndex="1" px="0rem" w={{ xs: "150%", sm: "100%" }}>
      <Flex
        // w="60%"
        p="10"
        w={{ sm: "56%" }}
        ml={{ sm: "20rem" }}
        alignItems="center"
        justifyContent="center"
        color="white"
        flexDirection="column"
      >
        <Text
          textTransform="uppercase"
          p={{ sm: "5" }}
          letterSpacing="2.5px"
          fontSize={{xs:"1.6rem",sm:"0.875rem"}}
        >
          35,000+ already joined
        </Text>
        <Heading
          p={{ sm: "5" }}
          w={{ sm: "68%" }}
          textAlign="center"
          fontWeight="500"
          fontSize={{xs:"2rem",sm:"default"}}
        >
          Stay up-to-date with what we're doing
        </Heading>
        <Flex p="5" w={{xs:"100%",sm:"75%"}}>
          <Input
            variant="filled"
            placeholder="Enter your email address"
            m="4"
          fontSize={{xs:"1.3rem",sm:"default"}}
            sx={{
              "&:focus": {
                bg: "white",
                color: "black",
              },
            }}
          />
          <Button m="4" w="50%" fontSize={{xs:"1.3rem",sm:"default"}}>
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Contact;
