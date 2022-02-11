import { NextSeo, ArticleJsonLd } from 'next-seo';
import { siteMetadata } from './siteMetadata';
import { useRouter } from 'next/router';

export const SEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    site_name: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.socialBanner}`,
        alt: siteMetadata.title,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    handle: siteMetadata.twitter,
    site: siteMetadata.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteMetadata.author,
    },
  ],
};

export const PageSeo = ({ title, description }) => {
  const router = useRouter();
  let url = `${siteMetadata.siteUrl}${router.asPath}`;
  let imagesArr = [siteMetadata.socialBanner];

  const featuredImages = imagesArr.map(img => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: title,
    };
  });

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        images: featuredImages,
        url: url,
        title,
        description,
      }}
    />
  );
};

export const BlogSeo = ({ title, summary, date, lastmod, url }) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr = [siteMetadata.socialBanner];

  const featuredImages = imagesArr.map(img => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: title,
    };
  });
  return (
    <>
      <NextSeo
        title={`${title} – ${siteMetadata.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${siteMetadata.siteUrl}`],
          },
          url,
          title,
          description: summary,
          images: featuredImages,
          twitter: {},
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={siteMetadata.author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={imagesArr}
        publisherName={siteMetadata.author}
        title={title}
        url={url}
      />
    </>
  );
};
