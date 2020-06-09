import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { PostCard, Pagination } from '../components/common';
import {
  PageBackground,
  FullHeightLayout,
  SectionLayout
} from '../components/Library/Layout';
import { Heading1, Body1 } from '../components/Library/Typography';
import PageWrapper from '../components/PageWrapper';
import { MetaData } from '../components/common/meta';
import HeroImage from '../images/juanton_nye_14_1920x1280.jpg';
import '../styles/global.css';

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */

const PostsSection = styled.section`
  padding: 96px 0;
  display: grid;
  justify-content: space-between;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  background: transparent;
  ${'' /* padding-top: 104px; */}
`;

const HeroBg = styled.div`
  width: 100%;
  min-height: 600px;
  background: transparent;
  background-image: url(${HeroImage});
  background-attachment: fixed;
  background-position: center;
  position: relative;
  z-index: 1;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    witdth: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const HeroHeading = styled.div`
  && {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    witdth: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h1,
    p {
      display: block;
      text-align: center;
      width: 100%;
      color: #fff;
    }
  }
`;

const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData location={location} />
      <PageBackground className="pagebg">
        <FullHeightLayout>
          <HeroSection>
            <HeroBg>
              <HeroHeading>
                <div>
                  <Heading1>Blog</Heading1>
                  <Body1>A place to share my knowledge and experience</Body1>
                </div>
              </HeroHeading>
            </HeroBg>
          </HeroSection>
          <PageWrapper currentPath={location.pathname}>
            <SectionLayout>
              <PostsSection>
                {posts.map(({ node }) => (
                  // The tag below includes the markup for each post - components/common/PostCard.js
                  <PostCard key={node.id} post={node} />
                ))}
              </PostsSection>
            </SectionLayout>
          </PageWrapper>
        </FullHeightLayout>
        <Pagination pageContext={pageContext} />
      </PageBackground>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  pageContext: PropTypes.object
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
