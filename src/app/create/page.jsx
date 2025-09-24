"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import TodoForm from "@/components/TodoForm";
import useCachedTodoById from "@/hooks/useCachedTodoById";
import { useState } from "react";

const Create = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addTodo } = useCachedTodoById(null);

  const handleSubmit = async ({ title, completed, priority }) => {
    setIsSubmitting(true);
    await addTodo({ title, completed, priority });
    setIsSubmitting(false);
  };
  
  const bg = useColorModeValue("white", "gray.900");
  const text = useColorModeValue("purple.700", "pink.200");

  return (
    <Box maxW="720px" mx="auto" mt={10} p={6} bg={bg} borderRadius="2xl" boxShadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center" color={text} fontFamily="heading">
        Create New Todo
      </Heading>
      <TodoForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitLabel="Add Todo"
      />
    </Box>
  );
};

export default Create;