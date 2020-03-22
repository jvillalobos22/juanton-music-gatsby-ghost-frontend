import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageWrapper from '../PageWrapper';
import { Heading1, Heading2, Heading3, Body1 } from '../Library/Typography';
import { ButtonOutline, LinkOutline } from '../Library/Buttons';
import { ResponsiveSoundcloudPlayer } from '../Library/ResponsiveSoundcloudPlayer';
import MailchimpSignupForm from '../Library/MailchimpSignupForm';

import VideoPlayer from '../Library/VideoPlayer';

const Layout = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  background: transparent;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
`;

const AboutLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 100vh;
`;

const Heading1SC = styled(Heading1)`
  width: 100%;
  margin-bottom: 24px;
`;

const Heading3SC = styled(Heading3)`
  width: 100%;
`;

const HeroHeading = styled.div`
  width: 50%;
`;

const SectionBody = styled.div`
  width: 40%;
  align-self: flex-end;
  margin-bottom: 64px;
`;

const SectionHeading = styled.div`
  margin-top: 96px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResponsiveSoundcloudPlayerSC = styled(ResponsiveSoundcloudPlayer)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }
`;

const CenteredButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 80px 0 0 0;
`;

const ShowsListing = styled.div`
  width: 100%;
  max-with: 900px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 96px;
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

const VideoPlayerLayout = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 96px;
`;

const AboutSection = ({ setSection }) => (
  <Layout>
    <PageWrapper>
      <AboutLayout>
        <HeroSection>
          <HeroHeading>
            <Heading1SC>Hi, I&rsquo;m Juanton</Heading1SC>
            <Heading3SC>
              A tech house producer and DJ in San Francisco
            </Heading3SC>
          </HeroHeading>
          <SectionBody>
            <MailchimpSignupForm />
          </SectionBody>
        </HeroSection>
        <SectionHeading>
          <Heading2>Recent Music & Mixes</Heading2>
        </SectionHeading>
        <ResponsiveSoundcloudPlayerSC>
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/936802876%3Fsecret_token%3Ds-89yBQ&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          ></iframe>
          <CenteredButton>
            <LinkOutline to="/music">More Music</LinkOutline>
          </CenteredButton>
        </ResponsiveSoundcloudPlayerSC>
        {/* <SectionHeading>
          <Heading2>2020 Shows</Heading2>
        </SectionHeading>
        <ShowsListing>
          <Listing>
            <a
              href="https://www.facebook.com/events/430086904547605/"
              target="_blank"
            >
              <span>1/11</span>&nbsp;-&nbsp;Franklyn Watts & John
              Summit&nbsp;-&nbsp;
              <b>Halcyon SF</b>
            </a>
          </Listing>
          <Listing>
            <span>3/14</span>&nbsp;-&nbsp;Housekeeping&nbsp;-&nbsp;
            <b>Bergerac SF</b>
          </Listing>
        </ShowsListing> */}
        <SectionHeading>
          <Heading2>Juanton in the Media</Heading2>
        </SectionHeading>
        <VideoPlayerLayout>
          <VideoPlayer videoId={'FrqkJLtjTlM'} />
        </VideoPlayerLayout>
      </AboutLayout>
    </PageWrapper>
  </Layout>
);

AboutSection.propTypes = {
  setSection: PropTypes.func
};

AboutSection.defaultProps = {
  setSection: undefined
};

export default AboutSection;
