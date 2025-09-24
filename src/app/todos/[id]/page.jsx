"use client";

import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import {
  Box,
  Button,
  Flex,
  Icon,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
  Collapse,
} from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import useCachedTodoById from '@/hooks/useCachedTodoById';

const TodoDetails = () => {
  const { id } = useParams();
  const { todo, isPending, error, deleteTodo } = useCachedTodoById(id);
  const router = useRouter();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [isPriority, setIsPriority] = useState(false);
  
  const bgCard = useColorModeValue('pink.50', 'purple.900');
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const buttonColor = useColorModeValue('gray.100', 'gray.800');
  const alertBg = useColorModeValue('pink.100', 'pink.600');
  const alertColor = useColorModeValue('red.500', 'red.300');
  const buttonHover = useColorModeValue('pink.500', 'pink.200');

  const confirmDeleteBoxBg = useColorModeValue('red.50', 'red.700');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setStatus(todo.completed);
      setIsPriority(todo.priority);
    }
  }, [todo]);
  
  const goBack = () => router.push('/');

  return (
    <Box maxW="600px" mx="auto" mt={8} p={6} bg={bgCard} borderRadius="2xl" boxShadow="lg" color={textColor}>
      {isPending && <Spinner size="xl" color="pink.400" />}
      {error && <Text color="red.400">{error}</Text>}
      {todo && (
        <VStack spacing={6} align="stretch">
          <Text fontSize="lg" fontWeight="semibold">
            Status:{' '}
            <Text as="span" fontWeight="bold" color={status.toString().toLowerCase() === 'true' ? 'green.500' : 'orange.400'}>
              {status.toString().toLowerCase() === 'true' ? 'Complete' : 'Incomplete'}
            </Text>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">{title}</Text>
          {isPriority && (
            <Flex align="center" bg={alertBg} color={alertColor} px={4} py={2} borderRadius="md" fontWeight="bold" boxShadow="sm">
              <Icon as={FaExclamationTriangle} mr={2} />
              <Text>Priority Task</Text>
            </Flex>
          )}
          <Flex gap={3} wrap="wrap">
            <Button
              colorScheme="pink"
              onClick={() => router.push(`/edit/${id}`)}
              fontWeight="bold"
              borderRadius="full"
              px={6}
            >
              Edit
            </Button>
            <Button
              colorScheme="pink"
              variant="outline"
              onClick={() => setConfirmDelete((prev) => !prev)}
              borderRadius="full"
              px={6}
              _hover={{ bg: buttonHover, color: buttonColor }}
            >
              Delete
            </Button>
          </Flex>
          <Collapse in={confirmDelete} animateOpacity>
            <Box mt={4} p={4} bg={confirmDeleteBoxBg} borderRadius="md" boxShadow="md">
              <Text fontWeight="medium" mb={3}>Are you sure you want to delete this todo?</Text>
              <Flex gap={3}>
                <Button colorScheme="red" onClick={deleteTodo}>Yes, Delete</Button>
                <Button variant="ghost" onClick={() => setConfirmDelete(false)}>Cancel</Button>
              </Flex>
            </Box>
          </Collapse>
          <Button variant="link" colorScheme="pink" onClick={goBack} mt={4} fontWeight="medium">
            ← Back to List
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default TodoDetails;