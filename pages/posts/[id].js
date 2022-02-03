import { getAllPostIds, getPostData } from '../../lib/post';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  Box,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Date from '../../components/Date';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  return {
    props: {
      postData,
      mdxSource,
    },
  };
}

export default function Post({ postData, mdxSource }) {
  const color = useColorModeValue('gray.900', 'whiteAlpha.700');

  return (
    <>
      <Box marginY="5">
        <Heading as="h2" size="lg">
          {postData.title}
        </Heading>
        <HStack>
          <Text color={color}>{postData.author}</Text>
          <Date dateString={postData.date} />
        </HStack>
      </Box>
      <MDXRemote {...mdxSource} />
    </>
  );
}
