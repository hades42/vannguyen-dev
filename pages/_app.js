import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layout/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import CustomCode from '../components/code-block/codeblock';
import codeTheme from '../components/code-block/theme';

const components = { pre: CustomCode };

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
          <MDXProvider components={components}>
            <Component {...pageProps} key={router.route} />
          </MDXProvider>
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
};

export default Website;
