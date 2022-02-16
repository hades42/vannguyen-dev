import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';
import { useContext } from 'react';
import { TocContext } from '../../hooks/globalContext';

const Main = ({ children, router }) => {
  const { appearTOC, setAppearTOC } = useContext(TocContext);

  return (
    <Box as="main">
      <Navbar path={router.asPath} />
      <Container
        minH="90vh"
        maxW={appearTOC ? 'container.xl' : 'container.md'}
        pt={14}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
