"use client";

import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Error = ({ error, reset }) => {
  const router = useRouter();

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.50" _dark={{ bg: 'gray.800' }}>
      <VStack spacing={6} p={8} bg="white" _dark={{ bg: 'gray.700' }} boxShadow="lg" rounded="md">
        <Heading color="red.500">Something went wrong!</Heading>
        <Text fontSize="lg" textAlign="center">{error.message}</Text>
        <Button colorScheme="pink" onClick={() => router.push('/')}>
          Go Back Home
        </Button>
        <Button colorScheme="red" onClick={() => reset()}>
          Try Again
        </Button>
      </VStack>
    </Box>
  );
};

export default Error;