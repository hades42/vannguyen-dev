import { getAllPostIds, getPostData } from '../../lib/post';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

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
  return (
    <>
      <MDXRemote {...mdxSource} />
    </>
  );
}
