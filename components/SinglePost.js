import {
  Text,
  Divider,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
  Heading,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Date from '../components/Date';
const SinglePost = ({ post }) => {
  return (
    <>
      <LinkBox
        _hover={{
          background: useColorModeValue(
            'rgba(228, 229, 237, 0.7)',
            'rgb(48, 53, 82)'
          ),
          borderRadius: '8px',
        }}
        paddingY="3"
        paddingX="2"
        as="article"
        cursor="pointer"
      >
        <Heading as="h3" fontSize="20px">
          <NextLink href={`/posts/${post.id}`} passHref>
            <LinkOverlay># {post.title}</LinkOverlay>
          </NextLink>
        </Heading>
        <Date dateString={post.date} />
        <Text color={useColorModeValue('black', 'gray.300')} marginTop="2">
          <NextLink href={`/posts/${post.id}`} passHref>
            <LinkOverlay>{post.summary}</LinkOverlay>
          </NextLink>
        </Text>
      </LinkBox>
      <Divider
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        my={6}
      ></Divider>
    </>
  );
};

export { SinglePost };
