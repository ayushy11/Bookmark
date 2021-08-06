export const Button = {
  baseStyle: {
    borderRadius: "6px",
    fontWeight: "400",
    // boxShadow: "none !important",
    color: "white",
    border: "none",
    height: "2.25rem",
    width: "auto",
    textTransform: "capitalize",
    cursor: "pointer",
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
      background: "primaryRed",
      fontSize: "0.875rem",
      height: "2.25rem",
      "&:hover": {
        background: "white",
        border: "2px solid red",
        color: "red",
      },
    },
    secondary: {
      background: "primary",
      fontSize: "0.875rem",
      height: "2.25rem",
      "&:hover": {
        background: "white",
        border: "2px solid hsl(231, 69%, 60%)",
        color: "primary",
      },
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
