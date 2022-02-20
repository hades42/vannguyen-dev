import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/post';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  Box,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Flex,
  Link,
  Stack,
  Icon,
} from '@chakra-ui/react';
import Date from '../../components/Date';
import { MDXProvider } from '@mdx-js/react';
import CustomCode from '../../components/code-block/codeblock';
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
  TestImage,
} from '../../components/mdx/custom-component';
import { BlogSeo } from '../../components/SEO/SEO';
import { siteMetadata } from '../../components/SEO/siteMetadata';
import React from 'react';
import TOC from '../../components/mdx/TOC';
import { GeneralContainer } from '../../components/GeneralContainer';
import { IoLogoGithub } from 'react-icons/io5';
import { FaDev } from 'react-icons/fa';
import NavPage from '../../components/NavPage';
import { Global } from '@emotion/react';

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
  TestImage,
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const getAllPaths = getSortedPostsData(true);
  const currentIndex = getAllPaths.findIndex(pathId => pathId.id === params.id);

  const prev = getAllPaths[currentIndex - 1] || null;
  const next = getAllPaths[currentIndex + 1] || null;

  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  delete postData.content;

  return {
    props: {
      postData,
      mdxSource,
      prev,
      next,
    },
  };
}

function Post({ postData, mdxSource, prev, next }) {
  const color = useColorModeValue('gray.900', 'whiteAlpha.700');
  const { date, id, lastmod, summary, title, isTOC } = postData;
  const devLink = postData.onDEV;

  return (
    <>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/posts/${id}`}
        title={title}
        summary={summary}
        date={date}
        lastmod={lastmod}
      />
      <GeneralContainer isTOC={isTOC}>
        <Flex>
          <Box
            width={isTOC ? ['100%', '100%', '100%', '75%'] : '100%'}
            paddingRight={isTOC && ['0px', '0px', '0px', '40px']}
          >
            <Box marginY="5">
              <Heading as="h2" size="lg" marginBottom="2">
                {postData.title}
              </Heading>
              <Stack direction={['column', 'column', 'row']}>
                <HStack>
                  <Text color={color}>{postData.author} - </Text>
                  <Date dateString={postData.date} />
                </HStack>
                <HStack>
                  <Link
                    href={`https://github.com/hades42/vannguyen-dev/blob/main/contents/blogs/${id}.mdx`}
                    target="_blank"
                    color={useColorModeValue('blackAlpha.800', 'orange.200')}
                    fontWeight="bold"
                    paddingLeft={['0px', '10px']}
                  >
                    <Icon as={IoLogoGithub} /> Edit on Github
                  </Link>
                  {devLink && (
                    <Link
                      href={devLink}
                      target="_blank"
                      color={useColorModeValue('gray.600', 'blue.200')}
                      fontWeight="bold"
                      paddingLeft={['0px', '10px']}
                    >
                      <Icon as={FaDev} /> on DEV
                    </Link>
                  )}{' '}
                </HStack>
              </Stack>
            </Box>
            <div id="post-body">
              <MDXProvider components={components}>
                <article>
                  <MDXRemote {...mdxSource} />
                </article>
              </MDXProvider>
            </div>
            <NavPage prev={prev} next={next} />
          </Box>
          {isTOC && <TOC />}
        </Flex>
      </GeneralContainer>
    </>
  );
}

export default React.memo(Post);
