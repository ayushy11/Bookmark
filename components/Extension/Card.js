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
      h={{ xs: "50%", sm: "50%" }}
      w={{ xs: "80%", sm: "50%" }}
      p="5"
      m="2"
      flexDirection="column"
      alignItems="center"
      boxShadow="xl"
      mt={(props) => position}
    >
      <Image
        src={logo}
        boxSize={{ xs: "120", sm: "100" }}
        mb={{ xs: "1rem" }}
      />
      <Heading
        textTransform="capitalize"
        p="2"
        fontSize={{ xs: "1.875rem", sm: "1.3rem" }}
      >
        {title}
      </Heading>
      <Text
        textTransform="capitalize"
        p="1"
        color="grayBlue"
        fontSize={{ xs: "1.5rem", sm: "1rem" }}
      >
        {version}
      </Text>
      <Image src="images/bg-dots.svg" p="1" w={{ xs: "100%", sm: "80%" }} />
      <Button
        variant="secondary"
        p="5"
        m="5"
        fontSize={{ xs: "1.5rem", sm: "1rem" }}
        h={{xs:"4rem",sm:"3rem"}}
      >
        Add & Install Extension
      </Button>
    </Flex>
  );
}

export default Card;
