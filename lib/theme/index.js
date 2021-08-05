import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Button } from "./Button";
// import { IconButton } from "./IconButton";
// import { Modal } from "../../components/common/Modal";
// import { FormLabel } from "./FormLabel";
// import { Tooltip } from "./Tooltip";

const breakpoints = createBreakpoints({
  xs: "0",
  sm: "600px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
});

const colors = {
  primary: "hsl(231, 69%, 60%)",
  primaryRed: "hsl(0, 94%, 66%)",
  grayBlue:"hsl(229, 8%, 60%)",
  darkBlue:"hsl(229, 31%, 21%)",
  
  buttonText: "#212121",
  primaryYellow: "#FBA948",
  primaryGray: "#B8B3B3",
  bgGray: "#E6E6E6",
  pageBg: "#F2F2F2",
  darkGray: "#888888",
  mediumGray: "#cccccc",
  lightGray: "#dddddd",
  formBgGray: "#f2f2f2",
  textGray: "#8C8A87",
  imageBorder: "#d1d1d1",
  //    darkGray: "#9C9B9C"
  cardRed: "#DA7270",
};

export const theme = extendTheme({
  colors,
  breakpoints,
  components: { Button },
});
