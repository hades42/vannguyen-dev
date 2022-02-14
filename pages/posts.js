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
    <NextLink href={`/posts/${post.id}`} passHref>
      <LinkBox cursor="pointer" mb={3} href={`/posts/${post.id}`}>
        <Heading as="h3" fontSize={20}>
          <NextLink href={`/posts/${post.id}`} passHref>
            {post.title}
          </NextLink>
        </Heading>
        <Date dateString={post.date} />
        <Text color={useColorModeValue('black', 'gray.300')} marginTop="2">
          <NextLink href={`/posts/${post.id}`} passHref>
            {post.summary}
          </NextLink>
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
        title={`${title} - Blog Page`}
        description={`A small digital blog created by Van Nguyen Nguyen. This is where I share my experience as well as some tutorial to develope interesting things - ${siteUrl}`}
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
