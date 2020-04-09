import React from 'react';
import styled from 'styled-components';

import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import PageWrapper from '../components/PageWrapper';
import { Body1, Heading2 } from '../components/Library/Typography';

// import '../styles/original.css';
import '../styles/global.css';

const ShowsListing = styled.div`
  width: 100%;
  max-with: 900px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;

const Listing = styled(Body1)`
  width: 100%;
  max-with: 900px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 300;
  margin-bottom: 16px;

  span {
    font-style: italic;
    font-weight: 400;
  }

  b {
    font-weight: 600;
  }
`;

const Layout = styled.div`
  width: 100%;
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    align-items: flex-start;
  }
`;

const ShowsPage = () => (
  <>
    <PageBackground className="homebg">
      <FullHeightLayout>
        <PageWrapper>
          <SectionLayoutSC>
            <Layout>
              <SectionHeading>
                <Heading2>2020 Shows</Heading2>
              </SectionHeading>
              <ShowsListing>
                <Listing>
                  <a
                    href="https://www.facebook.com/events/430086904547605/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>1/11</span>&nbsp;-&nbsp;Franklyn Watts & John
                    Summit&nbsp;-&nbsp;
                    <b>Halcyon SF</b>
                  </a>
                </Listing>
                <Listing>
                  <span>7/17</span>&nbsp;-&nbsp;Northern Nights Music Festival:
                  Submerged Stage&nbsp;-&nbsp;
                  <b>Piercy, CA</b>
                </Listing>
              </ShowsListing>
            </Layout>
          </SectionLayoutSC>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default ShowsPage;
