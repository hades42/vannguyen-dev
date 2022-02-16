import Navbar from '../navbar';
import { Box } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Navbar path={router.asPath} />
      {children}
      <Footer />
    </Box>
  );
};

export default Main;
