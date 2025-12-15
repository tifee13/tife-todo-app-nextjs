"use client";

import { Box, Heading, Text, VStack, LinkBox, LinkOverlay, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const TodoList = ({ todos, topic }) => {
  const cardBg = useColorModeValue("pink.50", "purple.700");
  const hoverBg = useColorModeValue("pink.100", "purple.600");
  const textColor = useColorModeValue("purple.800", "pink.100");
  const getStatus = (todo) => (todo.completed === true ? "Completed ✅" : "Incomplete ❌");

  return (
    <Box py={6} px={4}>
      <Heading mb={6} textAlign="center" color={textColor} fontFamily="heading">
        {topic}
      </Heading>
      <VStack spacing={5}>
        {todos.length ? (
          todos.map((todo) => (
            <LinkBox
              as="article"
              key={todo.id}
              bg={cardBg}
              p={5}
              rounded="lg"
              shadow="md"
              width="100%"
              maxW="lg"
              _hover={{ bg: hoverBg, transform: "scale(1.02)", transition: "0.2s" }}
            >
              <Heading as="h3" size="md" mb={2}>
                <LinkOverlay as={Link} href={`/todos/${todo.id}`}>
                  {todo.title}
                </LinkOverlay>
              </Heading>
              <Text fontWeight="medium" color={textColor}>
                Status: {getStatus(todo)}
              </Text>
            </LinkBox>
          ))
        ) : (
          <Box p={6} rounded="lg" shadow="md" bg={cardBg} textAlign="center" maxW="lg">
            <Text fontSize="lg" fontWeight="semibold" color={textColor}>
              No {topic} found. Create a new one to get started!
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default TodoList;