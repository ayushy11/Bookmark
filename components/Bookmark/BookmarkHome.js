import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import { Container, Section } from "../library";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import BookmarkDialog from "./BookmarkDialog";
import Bookmarks from "./Bookmarks";
import AddBookmark from "./AddBookmark";
import { v4 as uuidv4 } from "uuid";

function BookmarkHome() {
  const sampleBookmarks = {
    bookmarks: [
      {
        id: uuidv4(),
        data: "The Earth is not flat",
      },
      {
        id: uuidv4(),
        data: "It's not round either",
      },
      {
        id: uuidv4(),
        data: "It's more like a donut",
      },
    ],
  };

  const [state, setState] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("bookmarks")
        ? JSON.parse(localStorage.getItem("bookmarks"))
        : sampleBookmarks
      : true
  );

  const addBookmark = (data) => {
    const newBookmark = {
      id: uuidv4(),
      data,
    };
    setState({ bookmarks: [...state.bookmarks, newBookmark] });
  };

  const delBookmark = (id) => {
    setState({
      bookmarks: [...state.bookmarks.filter((bookmark) => bookmark.id != id)],
    });
  };

  useEffect(() => {
    typeof window !== "undefined"
      ? localStorage.setItem("bookmarks", JSON.stringify(state))
      : true;
  });

  return (
    <Section
      bg="#f9f9f9"
      zIndex="1"
      px="0rem"
      w={{ xs: "150%", sm: "100%" }}
      h="auto"
    >
      <Flex justifyContent="space-between" flexDir="column" h="100%">
        <Flex
          m={{ sm: "4rem" }}
          border="2px solid purple"
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          maxWidth="1440px"
          position="relative"
          height="100%"
          justifyContent={{ xs: "center", sm: "left" }}
        >
          Bookmarks
        </Flex>

        <Bookmarks bookmarks={state.bookmarks} delBookmark={delBookmark} />

        <AddBookmark addBookmark={addBookmark} />

        <Flex
          border="2px solid grey"
          w={{ xs: "150%", sm: "100%" }}
          p="1rem"
          justifyContent={{ xs: "space-between" }}
          position="fixed"
          bottom="0"
        >
          <Flex w={{ sm: "50%" }}>
            <Image
              src="/images/logo-bookmark.svg"
              pl={{ xs: "0rem", sm: "8rem" }}
              mt={{ sm: "1rem" }}
              h="1.875rem"
              zIndex="10000"
            />
          </Flex>
          <BookmarkDialog />
        </Flex>
      </Flex>
    </Section>
  );
}

export default BookmarkHome;
