import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container mt={8}>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you are looking for was not found.</Text>
      <Divider
        borderColor={useColorModeValue('blackAlpha', 'orange')}
        my={6}
      ></Divider>
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme={useColorModeValue('blackAlpha', 'orange')}>
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
