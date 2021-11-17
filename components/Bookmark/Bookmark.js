import React from "react";
// import { Button } from "@/lib/theme/Button";
import { Flex, Text, Button } from "@chakra-ui/react";

function Bookmark(props) {
  console.log("IMP", props);
  const { id, name, url } = props.bookmark;

  const deleteBookmark = (e) => {
    props.delBookmark(id);
  };

  return (
    <Flex w="50%" h="auto">
      <Button onClick={deleteBookmark}>delete</Button>
      <Flex w="100%" border="2px solid blue" flexDir="column">
        <Text w="50%">{name}</Text>
        <Text w="50%">{url}</Text>
      </Flex>
    </Flex>
  );
}

export default Bookmark;
