import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import 'github-markdown-css/github-markdown.css';

import {
  PageBackground,
  FullHeightLayout,
  SectionLayout
} from '../components/Library/Layout';

import { Heading1 } from '../components/Library/Typography';
import PageWrapper from '../components/PageWrapper';
import { MetaData } from '../components/common/meta';
import '../styles/global.css';

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */

const ArticleSC = styled.article`
  ${'' /* padding-top: 5rem; */}
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    padding-top: 0;
  }
`;

const Post = ({ data, location }) => {
  const post = data.ghostPost;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <PageBackground className="homebg">
        <FullHeightLayout>
          <PageWrapper>
            <SectionLayoutSC>
              <ArticleSC className="content">
                {post.feature_image ? (
                  <figure className="post-feature-image">
                    <img src={post.feature_image} alt={post.title} />
                  </figure>
                ) : null}
                <section className="post-full-content">
                  <Heading1>{post.title}</Heading1>

                  {/* The main post content */}
                  <section
                    className="content-body load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                </section>
              </ArticleSC>
            </SectionLayoutSC>
          </PageWrapper>
        </FullHeightLayout>
        {/* <Pagination pageContext={pageContext} /> */}
      </PageBackground>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string
    }).isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
