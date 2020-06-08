import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faSoundcloud,
  faMixcloud,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import PageWrapper from '../components/PageWrapper';
import { Heading2, Heading3, Heading4 } from '../components/Library/Typography';
import { ResponsiveSoundcloudPlayer } from '../components/Library/ResponsiveSoundcloudPlayer';
import { juantonLinks } from '../helpers/links';

import '../styles/global.css';

const ResponsiveSoundcloudPlayerSC = styled(ResponsiveSoundcloudPlayer)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Heading3SC = styled(Heading3)`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Heading4SC = styled(Heading4)`
  font-size: 20px;
  margin-bottom: 0;
`;

const RecentMusicLayout = styled.div`
  && {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 1099px) {
      justify-content: space-around;
    }

    @media screen and (max-width: 799px) {
      justify-content: center;
    }
  }
`;

const RecentStreamsLayout = styled.div`
  && {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 5rem;

    @media screen and (max-width: 799px) {
      justify-content: center;
    }
  }
`;

const TrackCard = styled.div`
  margin: 0 1rem;
  width: 33%;

  iframe {
    margin-bottom: 0.5rem;
    width: 100%;
  }

  @media screen and (max-width: 1099px) {
    width: 40%;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
    flex-direction: column;
    aling-items: center;
  }
`;

const CardText = styled.div`
  margin: 0 0.5rem;
`;

const StreamCard = styled.div`
  min-width: 40%;
  margin-bottom: 3rem;

  @media screen and (max-width: 1199px) {
    min-width: 45%;
  }

  @media screen and (max-width: 1023px) {
    width: 70%;
  }

  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

const ResponsiveTwitchVideo = styled.div`
  padding-top: 56.25%;
  position: relative;
  height: 0;
  margin-bottom: 16px;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
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
  justify-content: space-evenly;
  margin-top: 24px;
  margin-bottom: 48px;

  a.icon svg {
    color: '#b71c1c';
  }

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    margin: 32px 0;
    justify-content: space-evenly;
  }
`;

const SocialIcon = styled.a`
  && {
    font-size: 24px;
    margin: 32px;

    svg {
      margin-left: 8px;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
    }

    @media screen and (max-width: 1023px) {
      width: 49%;
      margin: 32px 0;
      text-align: center;
    }

    @media screen and (max-width: 799px) {
      width: 100%;
      max-width: 250px;
      border: 1px solid #fff;
      padding: 12px;

      &:hover {
        cursor: pointer;
        transform: none;
        background-color: #fff;
        color: #000;
      }
    }
  }
`;

const MusicPage = () => (
  <>
    <PageBackground className="pagebg">
      <FullHeightLayout>
        <PageWrapper>
          <SectionLayout>
            <SectionHeading>
              <Heading2>Juanton Original Tracks</Heading2>
            </SectionHeading>
            <RecentMusicLayout>
              <TrackCard>
                <iframe
                  src="https://open.spotify.com/embed/track/7nlkxsvVteA49pyOGBjCUG"
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <CardText>
                  <Heading3SC>My 808 (ft. Nessa Roz&eacute;)</Heading3SC>
                  <Heading4SC>Juanton</Heading4SC>
                </CardText>
              </TrackCard>
              <TrackCard>
                <iframe
                  src="https://open.spotify.com/embed/track/3LGYLgo99HVZzLfbZ1tbgQ"
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <CardText>
                  <Heading3SC>Morning</Heading3SC>
                  <Heading4SC>Juanton x BLK&WHT</Heading4SC>
                </CardText>
              </TrackCard>
            </RecentMusicLayout>
            <FollowSection className="content-body">
              <SectionHeading>
                <Heading2>
                  Listen to Juanton on Your Favorite Streaming Platform
                </Heading2>
              </SectionHeading>
              <SocialIconsContainer>
                <SocialIcon
                  className="icon"
                  href={juantonLinks.spotify.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify&nbsp;
                  <FontAwesomeIcon icon={faSpotify} />
                </SocialIcon>
                <SocialIcon
                  className="icon"
                  href={juantonLinks.soundcloud.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soundcloud&nbsp;
                  <FontAwesomeIcon icon={faSoundcloud} />
                </SocialIcon>
                <SocialIcon
                  className="icon"
                  href={juantonLinks.mixcloud.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mixcloud&nbsp;
                  <FontAwesomeIcon icon={faMixcloud} />
                </SocialIcon>
                <SocialIcon
                  className="icon"
                  href={juantonLinks.youtube.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube&nbsp;
                  <FontAwesomeIcon icon={faYoutube} />
                </SocialIcon>
              </SocialIconsContainer>
            </FollowSection>
            <SectionHeading>
              <Heading2>Past Live Streams</Heading2>
            </SectionHeading>
            <RecentStreamsLayout>
              <StreamCard>
                <ResponsiveTwitchVideo>
                  <iframe
                    src="https://player.twitch.tv/?video=633042804&parent=www.juantonmusic.com&autoplay=false"
                    frameBorder="0"
                    allowFullscreen="true"
                    scrolling="no"
                    height="100%"
                    width="100%"
                  ></iframe>
                </ResponsiveTwitchVideo>
                <CardText>
                  <Heading3SC>
                    Take Me To Tequila Tuesdays ft. Zendlo
                  </Heading3SC>
                  <Heading4SC>Halcyon, SF - 5/26/2020</Heading4SC>
                </CardText>
              </StreamCard>
              <StreamCard>
                <ResponsiveTwitchVideo>
                  <iframe
                    src="https://player.twitch.tv/?video=620781383&parent=www.juantonmusic.com&autoplay=false"
                    frameBorder="0"
                    allowFullscreen="true"
                    scrolling="no"
                    height="100%"
                    width="100%"
                  ></iframe>
                </ResponsiveTwitchVideo>
                <CardText>
                  <Heading3SC>Thursday Sessions</Heading3SC>
                  <Heading4SC>Housekeeping - 5/7/2020</Heading4SC>
                </CardText>
              </StreamCard>
            </RecentStreamsLayout>
            <SectionHeading>
              <Heading2>DJ Mixes</Heading2>
            </SectionHeading>
            <ResponsiveSoundcloudPlayerSC>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698934643&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              ></iframe>
            </ResponsiveSoundcloudPlayerSC>
            <ResponsiveSoundcloudPlayerSC>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/621153318&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              ></iframe>
            </ResponsiveSoundcloudPlayerSC>
          </SectionLayout>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default MusicPage;
