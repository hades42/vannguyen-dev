import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layout/main';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;
