import {
  Box,
  Input,
  Select,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const SearchFilter = ({ searchQuery, setSearchQuery, filterStatus, setFilterStatus }) => {
  const bg = useColorModeValue("pink.50", "purple.800");
  const inputBg = useColorModeValue("white", "purple.700");

  return (
    <Box bg={bg} p={4} rounded="md" shadow="md" mb={6}>
      <Stack direction={["column", "row"]} spacing={4} align="center">
        <FormControl>
          <FormLabel htmlFor="search" fontSize="sm" color="purple.600">
            Search Todos
          </FormLabel>
          <Input
            id="search"
            placeholder="Search todos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg={inputBg}
            focusBorderColor="pink.400"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="filter" fontSize="sm" color="purple.600">
            Filter Status
          </FormLabel>
          <Select
            id="filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            bg={inputBg}
            focusBorderColor="pink.400"
          >
            <option value="all">All</option>
            <option value="true">Completed</option>
            <option value="false">Incomplete</option>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default SearchFilter;
