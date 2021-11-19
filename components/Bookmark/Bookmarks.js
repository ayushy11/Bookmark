import React from "react";
import Bookmark from "./Bookmark.js";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Bookmarks(props) {
  //   console.log(props);
  return (
    // <Flex w="100%" overflow="scroll" h="100%">
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={2}
      h="100%"
    >
      {props.bookmarks?.map((bookmark, index) => {
        return (
          <Bookmark
            key={index}
            bookmark={bookmark}
            delBookmark={props.delBookmark}
          />
        );
      })}
    </Grid>
    // </Flex>
  );
}
