import React, { Fragment } from "react"
import Helmet from "react-helmet"
import SchemaOrg from "./SchemaOrg"
const SEO = ({seo, url, image}) => {
  const tile = seo.title;
  const description = seo.metaDesc;
  const opengraphTitle = seo.opengraphTitle?seo.opengraphTitle:seo.title;
  const opengraphDescription = seo.opengraphDescription?seo.opengraphDescription:seo.metaDesc;
  const opengraphImage = seo.opengraphImage.sourceUrl?seo.opengraphImage.sourceUrl:image;
  const twitter
  return (
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={opengraphTitle} />
        <meta property="og:description" content={opengraphDescription} />
        <meta property="og:image" content={opengraphImage} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        url={url}
        title={title}
        defaultTitle={defaultTitle}
      ></SchemaOrg>
    </Fragment>
  )
}
