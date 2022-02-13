import '../lib/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layout/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import { Global, css } from '@emotion/react';
import codeTheme from '../components/code-block/theme';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../components/SEO/SEO';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Router } from 'next/router';
import Loading from '../components/Loading';

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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <DefaultSeo {...SEO} />
      <Fonts />
      <CodeTheme />
      <Main router={router}>
        {loading ? (
          <Loading />
        ) : (
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        )}
      </Main>
    </ChakraProvider>
  );
};

export default Website;
