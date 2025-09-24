import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const TodoForm = ({
  initialTitle = "",
  initialStatus = "false",
  initialPriority = false,
  onSubmit,
  submitLabel = "Save Todo",
  isSubmitting = false,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [status, setStatus] = useState(initialStatus);
  const [priority, setPriority] = useState(initialPriority);

  useEffect(() => {
    setTitle(initialTitle);
    setStatus(initialStatus);
    setPriority(initialPriority);
  }, [initialTitle, initialStatus, initialPriority]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, completed: status, priority });
  };

  const bg = useColorModeValue("pink.50", "purple.900");
  const fieldBg = useColorModeValue("white", "gray.800");
  const hover = useColorModeValue("pink.300", "pink.600");
  const button = useColorModeValue("pink.300", "a393bf");

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      maxW="600px"
      mx="auto"
      mt={8}
      p={6}
      bg={bg}
      borderRadius="2xl"
      boxShadow="lg"
    >
      <VStack spacing={5} align="stretch">
        <FormControl isRequired>
          <FormLabel fontWeight="semibold">Todo Title</FormLabel>
          <Textarea
            rows={3}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            bg={fieldBg}
            borderRadius="md"
            _hover={{ borderColor: hover }}
            focusBorderColor="pink.400"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight="semibold">Todo Status</FormLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            bg={fieldBg}
            borderRadius="md"
            _hover={{ borderColor: hover }}
            focusBorderColor="pink.400"
          >
            <option value="false">Incomplete</option>
            <option value="true">Completed</option>
          </Select>
        </FormControl>

        <FormControl>
          <Checkbox
            isChecked={priority}
            onChange={(e) => setPriority(e.target.checked)}
            colorScheme="pink"
          >
            Make this a priority task
          </Checkbox>
        </FormControl>

        <Button
          type="submit"
          bg={useColorModeValue("pink.200", "#a393bf")} isLoading={isSubmitting}
          loadingText="Saving..."
          borderRadius="full"
          fontWeight="bold"
        >
          {submitLabel}
        </Button>
      </VStack>
    </Box>
  );
};

export default TodoForm;
