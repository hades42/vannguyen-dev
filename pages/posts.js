import Layout from '../components/layout/article';
import { Container, Heading, Text } from '@chakra-ui/react';

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={6}>
          Posts
        </Heading>
        <Text>I will post something soon!</Text>
      </Container>
    </Layout>
  );
};

export default Posts;
