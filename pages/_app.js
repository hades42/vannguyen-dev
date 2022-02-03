import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layout/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import CustomCode from '../components/code-block/codeblock';
import codeTheme from '../components/code-block/theme';
import {
  MyH1,
  MyH2,
  MyH3,
  MyH4,
  MyLink,
  MyStrong,
  MyImage,
  MyList,
  MyHr,
} from '../components/mdx/custom-component';

const components = {
  pre: CustomCode,
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  a: MyLink,
  strong: MyStrong,
  img: MyImage,
  li: MyList,
  hr: MyHr,
};

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
