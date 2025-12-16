import { Box, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Tife's Todo",
  description: "A modern, accessible, and responsive Todo application built with React and Chakra UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Box as="main" flex="1" py={6} px={4}>
              {children}
            </Box>
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}