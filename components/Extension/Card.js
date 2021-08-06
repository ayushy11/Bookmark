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

function Card({ logo, title, version, position }) {
  return (
    <Flex
      h="50%"
      w="50%"
      p="5"
      m="2"
      flexDirection="column"
      alignItems="center"
      boxShadow="xl"
      mt={(props) => position}
    >
      <Image src={logo} boxSize="100" />
      <Heading textTransform="capitalize" p="2" fontSize="1.3rem">
        {title}
      </Heading>
      <Text textTransform="capitalize" p="1" color="grayBlue" fontSize="1rem">
        {version}
      </Text>
      <Image src="images/bg-dots.svg" p="1" />
      <Button variant="secondary" p="5" m="5">
        Add & Install Extension
      </Button>
    </Flex>
  );
}

export default Card;
