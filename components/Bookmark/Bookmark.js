import React from "react";
// import { Button } from "@/lib/theme/Button";
import { Flex, Text, Button } from "@chakra-ui/react";

function Bookmark(props) {
  const { id, data } = props.bookmark;

  const deleteBookmark = (e) => {
    props.delBookmark(id);
  };

  return (
    <Flex w="50%" h="auto">
      <Button onClick={deleteBookmark}>delete</Button>
      <Flex w="100%">
        <Text>{data}</Text>
      </Flex>
    </Flex>
  );
}

export default Bookmark;
