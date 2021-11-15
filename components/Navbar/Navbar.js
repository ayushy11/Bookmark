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
      border="2px solid grey"
      w={{xs:"150%",sm:"100%"}}
      p="3rem"
      justifyContent={{ xs: "space-between" }}
    >
      <Flex w={{ sm: "50%" }}>
        <Image
          src="/images/logo-bookmark.svg"
          pl={{ xs: "0rem", sm: "8rem" }}
          h="1.875rem"
        />
      </Flex>
      <Flex
        display={{ xs: "none", sm: "flex" }}
        ref={menuVisible}
        w="50%"
        justifyContent="center"
        alignItems="right"
        color="grayBlue"
        fontWeight="500"
        fontSize="0.875rem"
        letterSpacing="1px"
        position={{ xs: "absolute", sm: "static" }}
        top={{ xs: "90" }}
        width={{ xs: "16rem", sm: "initial" }}
        listStyleType="none"
        alignItems="center"
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
        color={{ xs: "primaryBlue", sm: "secondaryBlue" }}
        zIndex="10000000"
        ref={menuVisible}
        // border="2px solid black"
        bg="white"
        pl={{ sm: "1rem" }}
        borderRadius="0.5rem"
        boxShadow={{ xs: "lg", sm: "none" }}
        textAlign="center"
        ml="2rem"
        top={{ xs: "90" }}
        width={{ xs: "16rem", sm: "initial" }}
        listStyleType="none"
        alignItems="center"
      >
        <a>
          <Text pr="3rem">FEATURES</Text>
        </a>
        <a>
          <Text pr="3rem">PRICING</Text>
        </a>
        <a>
          <Text pr="3rem">CONTACT</Text>
        </a>
        <Button w="16%" letterSpacing="1.5px" boxShadow="lg">
          LOGIN
        </Button>
      </Flex>
      <Flex pl="3rem" display={{ xs: "flex", sm: "none" }}>
        {menuStatus ? (
          <HamburgerIcon cursor="pointer" w={6} h={6} onClick={showMenu} />
        ) : (
          <CloseIcon cursor="pointer" w={6} h={6} onClick={hideMenu} />
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
