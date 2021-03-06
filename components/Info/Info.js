import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Container, Section } from "../library";

function Info() {
  return (
    <Section bg="#f9f9f9" zIndex="1" px="0rem" w={{ xs: "150%", sm: "100%" }}>
      <Flex
        // border="2px solid purple"
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
          // border="2px solid red"
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
            Frequently Asked Questions
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "center" }}
            p={{ xs: "0.8rem", sm: "0.5rem" }}
            color="grayBlue"
            fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
            mb={{ xs: "1rem" }}
          >
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </Text>
          <Flex
            w="100%"
            // border="2px solid orange"
            h="auto"
            fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
            mb="1rem"
          >
            <Accordion allowMultiple allowToggle w="100%">
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "primaryRed" }}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={{ xs: "1.5rem", sm: "1rem" }}>
                        What is Bookmark?
                      </Text>
                    </Box>
                    <AccordionIcon _expanded={{ color: "primaryRed" }} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "primaryRed" }}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={{ xs: "1.5rem", sm: "1rem" }}>
                        How can I request a new browser?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "primaryRed" }}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={{ xs: "1.5rem", sm: "1rem" }}>
                        Is there a mobile app?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ color: "primaryRed" }}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={{ xs: "1.5rem", sm: "1rem" }}>
                        What about other Chromium browsers?
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Button
            variant="secondary"
            fontSize={{ xs: "1.3rem", sm: "1rem" }}
            h={{ xs: "3rem",sm:"default" }}
          >
            More FAQs
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Info;
