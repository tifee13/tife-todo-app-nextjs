import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const maxVisible = 5;
    let start = currentPage;

    if (currentPage + maxVisible - 1 > totalPages) {
      start = totalPages - maxVisible + 1;
    }

    start = Math.max(start, 1);

    return Array.from(
      { length: Math.min(maxVisible, totalPages - start + 1) },
      (_, i) => start + i
    );
  };

  const pages = getVisiblePages();

  const activeBg = useColorModeValue('pink.300', 'purple.400');
  const hoverBg = useColorModeValue('pink.200', 'purple.600');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex justify="center" mt={8} wrap="wrap">
      <ButtonGroup isAttached variant="outline" spacing={0}>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          _hover={{ bg: hoverBg }}
          borderColor={borderColor}
          color={textColor}
        >
          Prev
        </Button>

        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            bg={page === currentPage ? activeBg : undefined}
            _hover={{ bg: hoverBg }}
            fontWeight={page === currentPage ? 'bold' : 'normal'}
            borderColor={borderColor}
            color={textColor}
            _focus={{ boxShadow: 'outline' }}
          >
            {page}
          </Button>
        ))}

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          _hover={{ bg: hoverBg }}
          borderColor={borderColor}
          color={textColor}
        >
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Pagination;
