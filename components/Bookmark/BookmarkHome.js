import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Heading, Button, Image } from "@chakra-ui/react";
import { Container, Section } from "../library";
import Bookmarks from "./Bookmarks";
import AddBookmark from "./AddBookmark";
import { v4 as uuidv4 } from "uuid";

function BookmarkHome() {
  const sampleBookmarks = {
    bookmarks: [
      {
        id: uuidv4(),
        name: "Google",
        url: "https://www.google.com",
      },
      {
        id: uuidv4(),
        name: "Github",
        url: "https://www.github.com",
      },
      {
        id: uuidv4(),
        name: "YouTube",
        url: "https://www.youtube.com",
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

  const addBookmark = (newdata) => {
    console.log("!!!!!!!!", newdata);
    const a = newdata.names;
    const b = newdata.urls;
    const newBookmark = {
      id: uuidv4(),
      name: a,
      url: b,
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
          // border="2px solid purple"
          flexDirection={{ xs: "column", sm: "row-reverse" }}
          maxWidth="1440px"
          position="relative"
          height="100%"
          justifyContent={{ xs: "center", sm: "left" }}
        >
          <Image
            src="/images/logo-bookmark.svg"
            pl={{ xs: "0rem", sm: "2rem" }}
            mt={{ sm: "1rem" }}
            h="1.875rem"
          />
        </Flex>

        <Bookmarks bookmarks={state.bookmarks} delBookmark={delBookmark} />

        <Flex
          // border="2px solid grey"
          w={{ xs: "150%", sm: "100%" }}
          p="2rem"
          justifyContent={{ xs: "flex-end" }}
          position="fixed"
          bottom="0"
          background="url(/images/wave.svg)"
          backgroundSize="1600px 198"
          animation="animate-wave-2 20s linear infinite"
          z-index="1000"
          opacity="1"
          animationDelay="0s"
          bottom="0"
        >
          <AddBookmark addBookmark={addBookmark} />
        </Flex>
      </Flex>
    </Section>
  );
}

export default BookmarkHome;
