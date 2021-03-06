import React, { useState } from "react";
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
  const data = [
    {
      title: "Bookmark in one click",
      content:
        "Organize your bookmarks however you like. Our simpe drag-n-drop interface gives you complete control over how you manage your favourite websites.",
      button: "More Info",
    },
    {
      title: "Intelligent search",
      content:
        "Organize your bookmarks however you like. Our simpe drag-n-drop interface gives you complete control over how you manage your favourite websites.",
      button: "More Info",
    },
    {
      title: "Share your bookmarks",
      content:
        "Organize your bookmarks however you like. Our simpe drag-n-drop interface gives you complete control over how you manage your favourite websites.",
      button: "More Info",
    },
  ];

  const [menuState, setmenuState] = useState(0);

  return (
    <Section bg="#f9f9f9" zIndex="1" px="0rem" w={{ xs: "150%", sm: "100%" }}>
      <Flex
        // border="2px solid purple"
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
            fontSize={{ xs: "3rem", sm: "2rem" }}
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
            fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
          >
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Text>
        </Flex>
        <Flex
          flexDirection={{ xs: "column", sm: "row" }}
          w={{ xs: "60%", sm: "50%" }}
          mt="1rem"
          alignItems="center"
          color="grayBlue"
          fontSize={{ xs: "1.5rem", sm: "1rem" }}
          letterSpacing="1px"
          mb="1.5rem"
          ml="5%"
        >
          <a onClick={() => setmenuState(0)}>
            <Text pr={{ sm: "3rem" }} pl={{ sm: "2.875rem" }}>
              Simple Bookmarking
            </Text>
          </a>
          <a onClick={() => setmenuState(1)}>
            <Text pr={{ sm: "3rem" }}>Speedy Searching</Text>
          </a>
          <a onClick={() => setmenuState(2)}>
            <Text pr={{ sm: "3rem" }}>Easy Sharing</Text>
          </a>
        </Flex>
        <Flex w="45%" h="0.125rem" backgroundColor="grayBlue" />
        <Flex w="100%" h="auto" 
        // border="2px solid orange"
        >
          <Section w="100%" bg="#f9f9f9" zIndex="1" px="0rem">
            <Flex
              w="100%"
              // border="2px solid purple"
              flexDirection={{ xs: "column", sm: "row" }}
              position="relative"
              height="100%"
              justifyContent={{ xs: "center", sm: "space-between" }}
              // mb="8rem"
            >
              <Flex
                // border="2px solid green"
                position="relative"
                justifyContent="center"
                w={{ xs: "100%", sm: "80%" }}
                h={{ xs: "60vh", sm: "70vh" }}
                zIndex="100"
                overflow="hidden"
                sx={{
                  "@media (min-width: 700px) ": {
                    "&:before": {
                      bgImage: "../images/bg-intro-desktop.svg",
                      content: '""',
                      position: "absolute",
                      top: "-254px",
                      left: "1rem",
                      display: "block",
                      width: "111%",
                      height: "1015px",
                      maxHeight: "1034px",
                      bgRepeat: "no-repeat",
                      bgPosition: "10 -145px",
                      bgSize: "cover",
                      zIndex: "-10",
                    },
                  },
                  "@media (max-width: 700px) ": {
                    "&:before": {
                      bgImage: "../images/bg-intro-mobile.svg",
                      content: "''",
                      position: "absolute",
                      display: "block",
                      width: "100%",
                      height: "320px",
                      maxHeight: "500px",
                      bgRepeat: "no-repeat",
                      bgPosition: "center -7px",
                      bgSize: "100% 100%",
                      zIndex: "-10",
                    },
                  },
                }}
              >
                {menuState == 0 ? (
                  <>
                    <Box
                      position="absolute"
                      top="12rem"
                      left="0"
                      borderRightRadius="10rem"
                      height={{xs:"15rem",sm:"23rem"}}
                      zIndex="0"
                      bg="primary"
                      w="90%"
                    />
                    <Image
                      // border="2px solid black"
                      src="/images/illustration-features-tab-1.svg"
                      position="absolute"
                      top="2.3rem"
                      right="0rem"
                      w="80%"
                      mt="4rem"
                      zIndex="10"
                      // transform={{
                      // xs: "translate(0px, -90px)",
                      // sm: "translate(140px, -84px)",
                      // }}
                    />
                  </>
                ) : menuState == 1 ? (
                  <>
                    <Box
                      position="absolute"
                      top="12rem"
                      left="0"
                      borderRightRadius="10rem"
                      height={{xs:"15rem",sm:"23rem"}}
                      zIndex="0"
                      bg="primary"
                      w="80%"
                    />
                    <Image
                      // border="2px solid black"
                      src="/images/illustration-features-tab-2.svg"
                      position="absolute"
                      top="0.3rem"
                      right="4rem"
                      w="70%"
                      mt="4rem"
                      zIndex="10"
                    />
                  </>
                ) : (
                  <>
                    <Box
                      position="absolute"
                      top="12rem"
                      left="0"
                      borderRightRadius="10rem"
                      height={{xs:"15rem",sm:"23rem"}}
                      zIndex="0"
                      bg="primary"
                      w="80%"
                    />
                    <Image
                      // border="2px solid black"
                      src="/images/illustration-features-tab-3.svg"
                      position="absolute"
                      top="0.3rem"
                      right="4rem"
                      w="70%"
                      mt="4rem"
                      zIndex="10"
                    />
                  </>
                )}
              </Flex>

              <Flex
                // border="2px solid red"
                flexDirection="column"
                alignItems={{ xs: "center", sm: "flex-start" }}
                // justifyContent="center"
                p="2rem"
                w={{ xs: "100%", sm: "70%" }}
                mt={{ sm: "5rem" }}
                pl={{ xs: "1.8rem", sm: "5rem" }}
                pt={{ sm: "5.875rem" }}
              >
                <Heading
                  textAlign={{ xs: "center", sm: "left" }}
                  fontWeight="500"
                  fontSize={{ xs: "2.875rem", sm: "1.875rem" }}
                  p={{ xs: "0rem", sm: "0.5rem" }}
                  color="primaryBlue"
                  fontFamily=""
                  lineHeight={{ sm: "1" }}
                >
                  {menuState == 0
                    ? "Bookmark in one click"
                    : menuState == 1
                    ? "Intelligent Search"
                    : "Share your Bookmarks"}
                </Heading>
                <Text
                  textAlign={{ xs: "center", sm: "left" }}
                  p={{ xs: "0.8rem", sm: "0.5rem" }}
                  color="grayBlue"
                  fontSize={{ xs: "1.5rem", sm: "1rem" }}
                >
                  Organize your bookmarks however you like. Our simpe
                  drag-n-drop interface gives you complete control over how you
                  manage your favourite websites.
                </Text>
                <Flex mt="1.875rem" ml="0.5rem" fontWeight="400">
                  <Button
                    variant="secondary"
                    display="block"
                    boxShadow="lg"
                    h={{ xs: "3.6rem" }}
                    fontSize={{xs:"1.3rem"}}
                  >
                    More Info
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Section>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Features;
