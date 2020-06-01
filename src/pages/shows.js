import React from 'react';
import styled from 'styled-components';

import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import PageWrapper from '../components/PageWrapper';
import { Heading2 } from '../components/Library/Typography';

// import '../styles/original.css';
import '../styles/global.css';

// const ShowsListing = styled.div`
//   width: 100%;
//   max-with: 900px;
//   display: flex;
//   margin: 0 auto;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const Listing = styled(Body1)`
//   width: 100%;
//   max-with: 900px;
//   display: flex;
//   margin: 0 auto;
//   justify-content: center;
//   flex-wrap: wrap;
//   font-weight: 300;
//   margin-bottom: 16px;

//   span {
//     font-style: italic;
//     font-weight: 400;
//   }

//   b {
//     font-weight: 600;
//   }
// `;

const Layout = styled.div`
  width: 100%;
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    align-items: flex-start;
  }
`;

const FlyerCardsSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const FlyerCard = styled.div`
  width: 33%;
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const ShowsPage = () => (
  <>
    <PageBackground className="pagebg">
      <FullHeightLayout>
        <PageWrapper>
          <SectionLayoutSC>
            <Layout>
              <SectionHeading>
                <Heading2>2020 Shows</Heading2>
              </SectionHeading>
              {/* <ShowsListing>
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
              </ShowsListing> */}
              <FlyerCardsSection>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/halcyon_zendlo_flyer_banner_5.26.20.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/halcyon_franklynwatts_johnsummit_flyer_insta_1.11.20.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
              </FlyerCardsSection>
              <FlyerCardsSection>
                <SectionHeading>
                  <Heading2>2019 Shows</Heading2>
                </SectionHeading>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/eye_heart_nye_2019-2020_flyer.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/gbbx_flyer_12.20.19.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/tmtt_flyer_10.26.19.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/begerac_flyer_101719.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/infinityroom_flyer_19_apr_2019.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/wishbar_flyer_2.16.19.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/ingoodcompany_flyer_01.04.19.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
              </FlyerCardsSection>
              <FlyerCardsSection>
                <SectionHeading>
                  <Heading2>2018 Shows</Heading2>
                </SectionHeading>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/will_clarke_flyer_12.05.18.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/infinityroom_flyer_8_sep_2018.jpg"
                    alt="Twitter"
                  />
                </FlyerCard>
              </FlyerCardsSection>
            </Layout>
          </SectionLayoutSC>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default ShowsPage;
