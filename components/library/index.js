import React from "react";
import { Box } from "@chakra-ui/react";

const Container = (props) => {
  return (
    <Box maxWidth="1440px" m="0 auto" {...props}>
      {props.children}
    </Box>
  );
};

const Section = (props) => {
  return (
    <Box as="section" bg="pageBg" px="5rem" {...props}>
      {props.children}
    </Box>
  );
};

const Page = ({ children, ...props }) => {
  return (
    <Box
      maxWidth="1440px"
      borderRadius="8px"
      mx="auto"
      py="2rem"
      bg="white"
      boxShadow="0 2px 4px 0 rgba(0,0,0,0.2)"
      {...props}
    >
      {children}
    </Box>
  );
};

export { Container, Section, Page };
