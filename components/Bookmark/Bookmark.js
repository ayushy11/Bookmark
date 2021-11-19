import React from "react";
// import { Button } from "@/lib/theme/Button";
import { Flex, Text, Button } from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";

function Bookmark(props) {
  console.log("IMP", props);
  const { id, name, url } = props.bookmark;

  const deleteBookmark = (e) => {
    props.delBookmark(id);
  };

  return (
    <Flex
      ml="0.5rem"
      mr="0.5rem"
      w="100%"
      h="auto"
      // border="2px solid blue"
      boxShadow="dark-lg"
      p={4}
      borderRadius="1.5rem"
    >
      <Flex w="100%" flexDir="column">
        <Text w="80%">{name}</Text>
        <Text w="100%">{url}</Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" w="70%">
        <a href={`//${url}`} target="_blank" rel="noopener noreferrer">
          <Button>
            <ExternalLinkIcon />
          </Button>
        </a>
        <Button onClick={deleteBookmark}>
          <CloseIcon />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Bookmark;
