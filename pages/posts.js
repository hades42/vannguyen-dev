import Layout from '../components/layout/article';
import {
  Container,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  LinkBox,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { getSortedPostsData } from '../lib/post';
import Date from '../components/Date';
import { PageSeo } from '../components/SEO/SEO';
import { siteMetadata } from '../components/SEO/siteMetadata';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const SinglePost = ({ post }) => (
  <>
    <NextLink href={`/posts/${post.id}`}>
      <LinkBox cursor="pointer" mb={3}>
        <Heading as="h3" fontSize={20}>
          {post.title}
        </Heading>
        <Date dateString={post.date} />
        <Text color={useColorModeValue('black', 'gray.300')} marginTop="2">
          {post.summary}
        </Text>
      </LinkBox>
    </NextLink>
    <Divider
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      my={6}
    ></Divider>
  </>
);

const Posts = ({ allPostsData }) => {
  const { title, siteUrl } = siteMetadata;
  return (
    <>
      <PageSeo
        title={`${title} - Blog Pages`}
        description={`A small digital blog where I share my experience as well as some tutorial to develope interesting things - ${siteUrl}`}
      />
      <Layout>
        <Container>
          <Heading as="h3" fontSize={25} mb={4} mt={6}>
            Posts
          </Heading>
          {allPostsData.map(post => (
            <SinglePost key={post.id} post={post} />
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default Posts;
