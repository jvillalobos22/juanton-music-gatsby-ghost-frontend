import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import MailchimpSignupForm from '../components/Library/MailchimpSignupForm';
import PageWrapper from '../components/PageWrapper';
import { Heading2, Body1 } from '../components/Library/Typography';
import { juantonLinks } from '../helpers/links';
import '../styles/global.css';

const Layout = styled.div`
  width: 100%;
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    align-items: flex-start;
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

const SectionHeadingSC = styled(SectionHeading)`
  margin-top: 64px;
`;

const SocialFontAwesome = styled(FontAwesomeIcon)``;

const TwitchNewsletterSignup = ({ location }) => (
  <>
    <PageBackground className="pagebg">
      <FullHeightLayout>
        <PageWrapper currentPath={location.pathname}>
          <SectionLayoutSC>
            <Layout>
              <SectionHeading>
                <Heading2>Thanks for Watching the Stream!</Heading2>
              </SectionHeading>
              <FollowSection className="content-body">
                <MailchimpSignupForm message="I really appreciate you joining us. If you could share your email with me below, I'll send production tips & tricks straight to your inbox. As a special gift to my Twitch viewers, I'll also be sending you an exclusive free download of one of my tracks." />

                <SectionHeadingSC>
                  <Heading2>Streaming Every Monday @ 6pm!</Heading2>
                </SectionHeadingSC>
                <Body1>
                  If you liked the stream, make sure to follow the channel on{' '}
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
                  .
                </Body1>
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
            </Layout>
          </SectionLayoutSC>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);
TwitchNewsletterSignup.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default TwitchNewsletterSignup;
