import React from "react";
// import { Button } from "@/lib/theme/Button";
import { Flex, Text, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function Bookmark(props) {
  console.log("IMP", props);
  const { id, name, url } = props.bookmark;

  const deleteBookmark = (e) => {
    props.delBookmark(id);
  };

  return (
    <Flex w="100%" h="auto">
      <Flex w="100%" border="2px solid blue" flexDir="column">
        <Text w="50%">{name}</Text>
        <Text w="50%">{url}</Text>
      </Flex>
      <Button onClick={deleteBookmark}>
        <CloseIcon />
      </Button>
    </Flex>
  );
}

export default Bookmark;
