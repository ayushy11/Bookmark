import React, { useState, useRef } from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(true);
  const menuVisible = useRef("");

  const showMenu = (e) => {
    setMenuStatus(false);
    menuVisible.current.classList.toggle("visible");
  };
  const hideMenu = (e) => {
    setMenuStatus(true);
    menuVisible.current.classList.toggle("hidden");
  };

  return (
    <Flex
      // border="2px solid grey"
      w={{ xs: "150%", sm: "100%" }}
      p="3rem"
      justifyContent={{ xs: "space-between" }}
      position="relative"
    >
      <Flex w={{ sm: "50%" }}>
        {menuStatus ? (
          <Image
            src="/images/logo-bookmark.svg"
            pl={{ xs: "0rem", sm: "8rem" }}
            mt={{sm:"1rem"}}
            h="1.875rem"
            zIndex="10000"
          />
        ) : (
          <Image           
            src="/images/logo-bookmark-white.svg"
            pl={{ xs: "0rem", sm: "8rem" }}
            h="1.875rem"
            zIndex="10000"
          />
        )}
      </Flex>
      <Flex
        ref={menuVisible}
        display={{ xs: "none", sm: "flex" }}
        justifyContent="center"
        alignItems="center"
        letterSpacing="1px"
        position={{ xs: "absolute", sm: "static" }}
        width={{ xs: "100%", sm: "initial" }}
        height={{ xs: "100vh", sm: "auto" }}
        listStyleType="none"
        sx={{
          li: {
            listStyle: "none",
            p: "0.8rem",
            "&:hover": {
              borderBottom: "4px",
              borderBottomColor: "#31d35c",
            },
          },
        }}
        fontSize={{ xs: "md", sm: "sm" }}
        color={{ xs: "white", sm: "black" }}
        zIndex="1000"
        bg={{ xs: "darkBlue", sm: "white" }}
        opacity={{ xs: "0.98" }}
        pl={{ sm: "1rem" }}
        boxShadow={{ xs: "lg", sm: "none" }}
        textAlign="center"
        ml={{ sm: "2rem" }}
        top={{ xs: "0" }}
        left={{ xs: "0" }}
        right={{ xs: "0" }}
      >
        <Flex
          border={{ xs: "2px solid white" }}
          flexDir={{ xs: "column", sm: "row" }}
          w={{ xs: "100%" }}
          h={{ xs: "100%" }}
          alignItems="center"
          justifyContent="center"
          p={{ xs: "2rem 2rem",sm:"0 0" }}
          fontSize={{ xs: "1.5rem",sm:"1rem" }}
        >
        <Flex display={{sm:"none"}} w={{xs:"100%"}} h={{xs:"1.5px"}} bg={{xs:"white"}}/>
          <a>
            <Text p={{ xs: "2rem",sm:"0" }} pr={{ sm: "3rem" }}>
              FEATURES
            </Text>
          </a>
          <Flex display={{sm:"none"}} w={{xs:"100%"}} h={{xs:"1.5px"}} bg={{xs:"white"}}/>
          <a>
            <Text p={{ xs: "2rem",sm:"0" }} pr={{ sm: "3rem" }}>
              PRICING
            </Text>
          </a>
          <Flex display={{sm:"none"}} w={{xs:"100%"}} h={{xs:"1.5px"}} bg={{xs:"white"}}/>
          <a>
            <Text p={{ xs: "2rem",sm:"0" }} pr={{ sm: "3rem" }}>
              CONTACT
            </Text>
          </a>
          <Flex display={{sm:"none"}} w={{xs:"100%"}} h={{xs:"1.5px"}} bg={{xs:"white"}}/>
          <Button
            mt={{xs:"2.5rem",sm:"0"}}
            fontSize={{ xs: "1.5rem",sm:"1rem" }}
            p={{ xs: "2rem"}}
            w={{ xs: "100%", sm: "16%" }}
            letterSpacing="1.5px"
            boxShadow="lg"
          >
            LOGIN
          </Button>
        </Flex>
      </Flex>
      <Flex pl="3rem" display={{ xs: "flex", sm: "none" }}>
        {menuStatus ? (
          <HamburgerIcon
            zIndex="10000"
            cursor="pointer"
            w={6}
            h={6}
            onClick={showMenu}
          />
        ) : (
          <CloseIcon
            zIndex="10000"
            cursor="pointer"
            w={6}
            h={6}
            onClick={hideMenu}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;

// sx={{
//   ":before": {
//     content: "''",
//     position: "absolute",
//     width: "100vw",
//     height: "100vh",
//     bg: "darkBlue",
//   },
// }}
