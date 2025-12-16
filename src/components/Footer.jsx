"use client";

import { Box, Flex, Text, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const bg = useColorModeValue("pink.100", "purple.900");
  const textColor = useColorModeValue("purple.800", "pink.100");

  return (
    <Box as="footer" bg={bg} color={textColor} py={6} px={4} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" maxW="6xl" mx="auto" textAlign={{ base: "center", md: "left" }}>
        <Text fontWeight="bold" mb={{ base: 4, md: 0 }}>
          Tiffs Todo
        </Text>
        <Flex gap={4} align="center">
          <Link href="https://github.com/tifee13" isExternal aria-label="GitHub">
            <Icon as={FaGithub} boxSize={5} _hover={{ color: "purple.500" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/boluwatife-o-oluyomi" isExternal aria-label="LinkedIn">
            <Icon as={FaLinkedin} boxSize={5} _hover={{ color: "purple.500" }} />
          </Link>
        </Flex>
        <Text fontSize="sm" mt={{ base: 4, md: 0 }}>
          &copy; {year} Boluwatife O-Oluyomi.
        </Text>
        <Text fontSize="sm">
          ALT/SOE/024/2526
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;