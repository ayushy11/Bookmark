export const Button = {
  baseStyle: {
    borderRadius: "6px",
    // boxShadow: "none !important",
    color: "white",
    border: "none",
    height: "2.25rem",
    width: "auto",
  },
  size: {
    md: {
      height: "2.25rem",
      width: "auto",
    },
    lg: {
      height: "2.375rem",
      width: "auto",
    },
  },
  variants: {
    primary: {
      background: "red",
      fontSize: "0.875rem",
      // border: "solid 1px #F9AA4A",
      height: "2.25rem",
    },
    secondary: {
      background: "mediumGray",
      fontSize: "0.875rem",
      border: "none",
    },
    whiteTab: {
      bg: "white",
      fontSize: "0.875rem",
      fontWeight: "400",
      color: "primaryRed",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
