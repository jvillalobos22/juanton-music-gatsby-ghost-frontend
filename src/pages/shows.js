import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import PageWrapper from '../components/PageWrapper';
import { Heading2, Body1 } from '../components/Library/Typography';
import { juantonLinks } from '../helpers/links';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  @media screen and (max-width: 1023px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const FollowSection = styled.div`
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto;
`;

const SocialIconsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;

  a.icon svg {
    color: '#b71c1c';
  }
`;

const SocialIcon = styled.a`
  && {
    font-size: 32px;
    margin: 16px;

    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
    }
  }
`;

const SocialFontAwesome = styled(FontAwesomeIcon)``;

const ShowsPage = ({ location }) => (
  <>
    <PageBackground className="pagebg">
      <FullHeightLayout>
        <PageWrapper currentPath={location.pathname}>
          <SectionLayoutSC>
            <Layout>
              <SectionHeading>
                <Heading2>COVID-19 Update</Heading2>
              </SectionHeading>
              <FollowSection className="content-body">
                <Body1>
                  With all 2020 shows & festivals being cancelled, I will not be
                  able to perform any live shows until 2021 at the earliest, but
                  I will be streaming live DJ sets on{' '}
                  <a
                    href={juantonLinks.twitch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitch
                  </a>{' '}
                  &{' '}
                  <a
                    href={juantonLinks.youtube.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                  . I will also begin streaming live production sessions soon so
                  keep an eye out for Juanton announcements in your social
                  feeds.
                </Body1>
                <SectionHeading>
                  <Heading2>When Will I Play Next?</Heading2>
                </SectionHeading>
                <Body1>
                  You can stay up to date with all my upcoming production and DJ
                  streams by following me on{' '}
                  <a
                    href={juantonLinks.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>{' '}
                  or{' '}
                  <a
                    href={juantonLinks.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>{' '}
                  where I frequently post updates on upcoming events.
                </Body1>
                <SocialIconsContainer>
                  <SocialIcon
                    className="icon"
                    href={juantonLinks.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialFontAwesome icon={faInstagram} />
                  </SocialIcon>
                  <SocialIcon
                    className="icon"
                    href={juantonLinks.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialFontAwesome icon={faFacebook} />
                  </SocialIcon>
                  <SocialIcon
                    className="icon"
                    href={juantonLinks.twitch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialFontAwesome icon={faTwitch} />
                  </SocialIcon>
                  <SocialIcon
                    className="icon"
                    href={juantonLinks.youtube.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialFontAwesome icon={faYoutube} />
                  </SocialIcon>
                </SocialIconsContainer>
              </FollowSection>
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
                    alt="Juanton at Halcyon SF for Zendlo Show May 26 2020 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/halcyon_franklynwatts_johnsummit_flyer_insta_1.11.20.jpg"
                    alt="Juanton at Halcyon SF for Franklyn Watts Show January 11 2020 flyer"
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
                    alt="Juanton at Eye Heart NYE 2019-2020 ft Dillon Francis flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/gbbx_flyer_12.20.19.jpg"
                    alt="Juanton at Ghostbag for Christmas December 20 2019 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/tmtt_flyer_10.26.19.jpg"
                    alt="Juanton at Take Me To Tequila October 26 2019 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/begerac_flyer_101719.jpg"
                    alt="Juanton at Bergerac Housekeeping November 17 2019 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/infinityroom_flyer_19_apr_2019.jpg"
                    alt="Juanton at Temple Infinity Room April 19 2019 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/wishbar_flyer_2.16.19.jpg"
                    alt="Juanton at Wishbar Housekeeping February 16 2019 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/ingoodcompany_flyer_01.04.19.jpg"
                    alt="Juanton at Public Works SF In Good Company January 04 2019 flyer"
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
                    alt="Juanton at the El Rey Theater Chico ft Will Clarke December 05 2018 flyer"
                  />
                </FlyerCard>
                <FlyerCard>
                  <img
                    className="site-nav-icon"
                    src="/images/flyers/infinityroom_flyer_8_sep_2018.jpg"
                    alt="Juanton at Temple Infinity Room September 8 2018 flyer"
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
ShowsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default ShowsPage;
