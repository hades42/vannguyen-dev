import { getAllPostIds, getPostData } from '../../lib/post';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  Box,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Flex,
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
import Layout from '../../components/layout/article';
import React, { useContext, useEffect } from 'react';
import TOC from '../../components/mdx/TOC';
import { TocContext } from '../../hooks/globalContext';

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
    },
  };
}

function Post({ postData, mdxSource }) {
  const color = useColorModeValue('gray.900', 'whiteAlpha.700');
  const { date, id, lastmod, summary, title, isTOC } = postData;
  const { appearTOC, setAppearTOC } = useContext(TocContext);

  useEffect(() => {
    setAppearTOC(isTOC);
    return () => {
      setAppearTOC(false);
    };
  });
  return (
    <>
      <BlogSeo
        url={`${siteMetadata.siteUrl}/posts/${id}`}
        title={title}
        summary={summary}
        date={date}
        lastmod={lastmod}
      />
      <Layout>
        <Flex>
          <Box
            width={isTOC ? ['100%', '100%', '100%', '75%'] : '100%'}
            paddingRight={isTOC && '40px'}
          >
            <Box marginY="5">
              <Heading as="h2" size="lg">
                {postData.title}
              </Heading>
              <HStack>
                <Text color={color}>{postData.author}</Text>
                <Date dateString={postData.date} />
              </HStack>
            </Box>
            <div id="post-body">
              <MDXProvider components={components}>
                <article>
                  <MDXRemote {...mdxSource} />
                </article>
              </MDXProvider>
            </div>
          </Box>
          {isTOC && <TOC />}
        </Flex>
      </Layout>
    </>
  );
}

export default React.memo(Post);
