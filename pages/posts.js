import Layout from '../components/layout/article';
import { Container, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { getSortedPostsData } from '../lib/post';
import { PageSeo } from '../components/SEO/SEO';
import { siteMetadata } from '../components/SEO/siteMetadata';
import { GeneralContainer } from '../components/GeneralContainer';
import { SinglePost } from '../components/SinglePost';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Posts = ({ allPostsData }) => {
  const { title, siteUrl } = siteMetadata;
  return (
    <>
      <GeneralContainer>
        <PageSeo
          title={`${title} - Blog Page`}
          description={`A small digital blog created by Van Nguyen Nguyen. This is where I share my experience as well as some tutorial to develope interesting things - ${siteUrl}`}
        />
        <Layout>
          <Container>
            <Heading as="h3" fontSize={25} mb={2} mt={6}>
              Posts
            </Heading>
            <Text
              mb={5}
              fontSize={18}
              color={useColorModeValue('gray.700', 'gray.400')}
            >
              I write down all stuffs that I find interesting.
            </Text>
            {allPostsData.map(post => (
              <SinglePost key={post.id} post={post} />
            ))}
          </Container>
        </Layout>
      </GeneralContainer>
    </>
  );
};

export default Posts;
