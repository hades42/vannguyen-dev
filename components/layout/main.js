import Head from 'next/head';
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <link rel="icon" href="/images/favicon.ico"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Van Nguyen Nguyen - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container minH="100vh" maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
