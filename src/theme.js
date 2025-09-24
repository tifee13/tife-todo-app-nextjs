import { extendTheme, theme as base } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
  brand: base.colors.pink,
  accent: base.colors.purple,
  gold: {
  500: "#FFD700",
  },
  },
  fonts: {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
  },
  styles: {
  global: (props) => ({
  body: {
  bg: props.colorMode === "dark" ? "#1A202C" : "#fff0f5",
  color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
  },
  }),
  },
});
export default theme;