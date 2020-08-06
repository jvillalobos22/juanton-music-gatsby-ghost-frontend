import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const PageMeta = ({ meta, children }) => (
  <Helmet>
    <title>{meta.meta_title}</title>
    <meta name="description" content={meta.meta_description} />
    <link rel="canonical" href={meta.canonical} />
    <meta property="og:site_name" content={meta.og_site_name} />
    <meta property="og:type" content={meta.og_type || 'website'} />
    <meta property="og:title" content={meta.og_title || meta.meta_title} />
    <meta
      property="og:description"
      content={meta.og_description || meta.meta_description}
    />
    <meta property="og:url" content={meta.canonical} />
    <meta
      name="twitter:title"
      content={meta.twitter_title || meta.meta_title}
    />
    <meta
      name="twitter:description"
      content={meta.twitter_description || meta.meta_description}
    />
    <meta name="twitter:url" content={meta.canonical} />
    <meta name="twitter:site" content={meta.twitter_site} />
    <meta name="twitter:creator" content={meta.twitter_site} />
    {children && children}
    {/* <script type="application/ld+json">
          {JSON.stringify(jsonLd, undefined, 4)}
        </script> */}
  </Helmet>
);

PageMeta.propTypes = {
  meta: PropTypes.shape({
    meta_title: PropTypes.string.isRequired,
    meta_description: PropTypes.string.isRequired,
    canonical: PropTypes.string.isRequired,
    og_site_name: PropTypes.string,
    og_type: PropTypes.string,
    og_title: PropTypes.string,
    og_description: PropTypes.string,
    twitter_title: PropTypes.string,
    twitter_description: PropTypes.string,
    twitter_site: PropTypes.string
  }).isRequired,
  children: PropTypes.node
};

PageMeta.defaultProps = {
  children: null
};

export default PageMeta;
