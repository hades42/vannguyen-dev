import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Navbar path={router.asPath} />
      <Container minH="90vh" maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
