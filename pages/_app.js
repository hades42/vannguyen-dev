import '../lib/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layout/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import { Global, css } from '@emotion/react';
import codeTheme from '../components/code-block/theme';

const CodeTheme = () => {
  return (
    <Global
      styles={css`
        ${codeTheme}
      `}
    ></Global>
  );
};

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <CodeTheme />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
};

export default Website;
