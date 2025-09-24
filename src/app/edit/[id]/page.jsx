"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import TodoForm from "@/components/TodoForm";
import useCachedTodoById from "@/hooks/useCachedTodoById";

const TodoFormPage = () => {
  const { id } = useParams();
  const isEditMode = !!id;
  
  const {
    todo: fetchedTodo,
    isPending: loadingTodo,
    error,
    updateTodo,
  } = useCachedTodoById(id);

  const handleSubmit = async ({ title, completed, priority }) => {
    await updateTodo({ title, completed, priority });
  };
  
  const bg = useColorModeValue("white", "gray.900");
  const text = useColorModeValue("purple.700", "pink.200");

  if (isEditMode && loadingTodo) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="lg" color="pink.400" />
        <Text mt={2}>Loading todo...</Text>
      </Box>
    );
  }

  if (isEditMode && error) {
    return (
      <Box textAlign="center" mt={10} color="red.400">
        <Text>{error}</Text>
      </Box>
    );
  }

  return (
    <Box maxW="720px" mx="auto" mt={10} p={6} bg={bg} borderRadius="2xl" boxShadow="lg">
      <Heading as="h2" size="lg" mb={6} textAlign="center" color={text} fontFamily="heading">
        Edit Todo
      </Heading>
      {fetchedTodo && (
        <TodoForm
          initialTitle={fetchedTodo?.title || ""}
          initialStatus={String(fetchedTodo?.completed ?? "false")}
          initialPriority={fetchedTodo?.priority || false}
          onSubmit={handleSubmit}
          submitLabel="Update Todo"
        />
      )}
    </Box>
  );
};

export default TodoFormPage;