import React from "react";
import Bookmark from "./Bookmark.js";
import { Flex } from "@chakra-ui/react";

export default function Bookmarks(props) {
  console.log(props);
  return (
    <Flex w="100%" overflow="scroll">
      {props.bookmarks?.map((bookmark, index) => {
        return (
          <Bookmark
            key={index}
            bookmark={bookmark}
            delBookmark={props.delBookmark}
          />
        );
      })}
    </Flex>
  );
}
