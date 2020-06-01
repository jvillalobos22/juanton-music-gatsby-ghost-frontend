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

import PageWrapper from '../components/PageWrapper';
import { MetaData } from '../components/common/meta';
import '../styles/global.css';

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */

const ArticleSC = styled.article`
  h1 {
    margin-top: 0;
    line-height: 1.4;
  }
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    padding-top: 0;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 100px;
`;

const Page = ({ data, location }) => {
  const page = data.ghostPage;

  return (
    <>
      <MetaData data={data} location={location} type="website" />
      <Helmet>
        <style type="text/css">{`${page.codeinjection_styles}`}</style>
      </Helmet>
      <PageBackground className="pagebg">
        <FullHeightLayout>
          <PageWrapper>
            <SectionLayoutSC>
              <ArticleSC className="content">
                {page.feature_image ? (
                  <figure className="post-feature-image">
                    <img src={page.feature_image} alt={page.title} />
                  </figure>
                ) : (
                  <Spacer />
                )}
                <section className="post-full-content">
                  {/* <Heading1>{page.title}</Heading1> */}

                  {/* The main post content */}
                  <section
                    className="content-body load-external-scripts"
                    dangerouslySetInnerHTML={{ __html: page.html }}
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

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string
    }).isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export default Page;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`;
