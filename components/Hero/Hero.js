import React from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import { Container, Section } from "../library";
import Link from "next/link";

function Hero() {
  return (
    <Section
      bg="#f9f9f9"
      zIndex="1"
      px="0rem"
      w={{ xs: "150%", sm: "100%" }}
      h={{ xs:"100%", sm: "100%" }}
    >
      <Flex
        border="2px solid purple"
        flexDirection={{ xs: "column", sm: "row-reverse" }}
        maxWidth="1440px"
        position="relative"
        height={{xs:"100%",sm:"100%"}}
        justifyContent={{ xs: "center", sm: "space-between" }}
        // mb="8rem"
      >
        <Flex
          border="2px solid green"
          position="relative"
          justifyContent="center"
          w={{ xs: "100%", sm: "80%" }}
          h={{ xs: "100%", sm: "70%", lg: "100%", xl: "100%" }}
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
          <Box
            position="absolute"
            top="12rem"
            right="0"
            borderLeftRadius="10rem"
            height={{ xs: "20rem", sm: "23rem" }}
            zIndex="0"
            bg="primary"
            w="70%"
          />
          <Image
            // border="2px solid black"
            src="/images/illustration-hero.svg"
            position="absolute"
            // top="-2.3rem"
            w="93%"
            mt="4rem"
            zIndex="10"
            // transform={{
            // xs: "translate(0px, -90px)",
            // sm: "translate(140px, -84px)",
            // }}
          />
        </Flex>

        <Flex
          // border="2px solid red"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "flex-start" }}
          // justifyContent="center"
          p="2rem"
          w={{ xs: "100%", sm: "70%" }}
          mt={{ sm: "5rem" }}
          pl={{ xs: "1.8rem", sm: "10rem" }}
        >
          <Heading
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight="500"
            fontSize={{ xs: "3rem", sm: "3rem" }}
            p={{ xs: "0rem", sm: "0.5rem" }}
            color="primaryBlue"
            fontFamily=""
            lineHeight={{ sm: "1" }}
          >
            A Simple Bookmark Manager
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "left" }}
            p={{ xs: "0.8rem", sm: "0.5rem" }}
            color="grayBlue"
            fontSize={{ xs: "1.5rem", sm: "1.3rem" }}
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Text>
          <Flex mt="1.875rem" ml="0.5rem" fontWeight="400">
            <Link href="/bookmark">
              <Button
                variant="secondary"
                display="block"
                boxShadow="lg"
                fontSize={{ xs: "1.3rem" }}
                h={{ xs: "4rem", sm: "3rem" }}
              >
                get it on chrome
              </Button>
            </Link>
            <Link href="/bookmark">
              <Button
                variant="secondary"
                display="block"
                ml="1.3rem"
                boxShadow="lg"
                fontSize={{ xs: "1.3rem" }}
                h={{ xs: "4rem", sm: "3rem" }}
                // onClick={}
              >
                get it on firefox
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Hero;
