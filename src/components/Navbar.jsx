"use client";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Stack,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue('pink.100', 'purple.900');
  const textColor = useColorModeValue('purple.800', 'pink.100');
  const hoverColor = useColorModeValue('pink.400', 'pink.200');

  return (
    <Box bg={bg} px={4} py={3} fontFamily="heading" w="100%">
      <Flex justify="space-between" align="center">
        <Heading size="md" color={textColor}>
          Tiffs Todo
        </Heading>

        <HStack
          display={{ base: 'none', md: 'flex' }}
          spacing={5}
          color={textColor}
        >
          {}
          <ChakraLink as={Link} href="/" _hover={{ color: hoverColor }}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} href="/create" _hover={{ color: hoverColor }}>
            New Todo
          </ChakraLink>
          <ChakraLink as={Link} href="/priority" _hover={{ color: hoverColor }}>
            Priority
          </ChakraLink>
        </HStack>

        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            color={textColor}
            _hover={{ color: hoverColor }}
          />

          <IconButton
            aria-label="Open menu"
            icon={<FaBars />}
            onClick={onOpen}
            variant="ghost"
            display={{ base: 'flex', md: 'none' }}
            color={textColor}
            _hover={{ color: hoverColor }}
          />
        </HStack>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bg} color={textColor}>
          <DrawerBody mt={10}>
            <Stack spacing={5}>
              {}
              <ChakraLink as={Link} href="/" onClick={onClose}>
                Home
              </ChakraLink>
              <ChakraLink as={Link} href="/create" onClick={onClose}>
                New Todo
              </ChakraLink>
              <ChakraLink as={Link} href="/priority" onClick={onClose}>
                Priority
              </ChakraLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;