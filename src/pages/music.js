import React from 'react';
import styled from 'styled-components';

import {
  PageBackground,
  FullHeightLayout,
  SectionLayout,
  SectionHeading
} from '../components/Library/Layout';
import PageWrapper from '../components/PageWrapper';
import { Heading2, Heading3, Heading4 } from '../components/Library/Typography';
import { LinkOutline } from '../components/Library/Buttons';
import { ResponsiveSoundcloudPlayer } from '../components/Library/ResponsiveSoundcloudPlayer';

// import '../styles/original.css';
import '../styles/global.css';

const ResponsiveSoundcloudPlayerSC = styled(ResponsiveSoundcloudPlayer)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

// <iframe
//   width="100%"
//   height="450"
//   scrolling="no"
//   frameBorder="no"
//   allow="autoplay"
//   src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/936802876%3Fsecret_token%3Ds-89yBQ&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
// ></iframe>;

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
    justify-content: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;

const TrackCard = styled.div`
  margin: 0 1rem;
  width: 25%;

  iframe {
    margin-bottom: 0.5rem;
  }
`;

const CardText = styled.div`
  margin: 0 0.5rem;
`;

const StreamCard = styled.div`
  min-width: 33%;
  margin: 0 3rem 3rem 3rem;
  margin-bottom: 3rem;

  iframe {
    margin-bottom: 1rem;
  }
`;

const CenteredButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 80px 0 0 0;
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
            <SectionHeading>
              <Heading2>Past Live Streams</Heading2>
            </SectionHeading>
            <RecentMusicLayout>
              <StreamCard>
                <iframe
                  src="https://player.twitch.tv/?video=633042804&parent=www.juantonmusic.com&autoplay=false"
                  frameBorder="0"
                  allowFullscreen="true"
                  scrolling="no"
                  height="378"
                  width="620"
                ></iframe>
                <CardText>
                  <Heading3SC>
                    Take Me To Tequila Tuesdays ft. Zendlo
                  </Heading3SC>
                  <Heading4SC>Halcyon, SF - 5/26/2020</Heading4SC>
                </CardText>
              </StreamCard>
              <StreamCard>
                <iframe
                  src="https://player.twitch.tv/?video=620781383&parent=www.juantonmusic.com&autoplay=false"
                  frameBorder="0"
                  allowFullscreen="true"
                  scrolling="no"
                  height="378"
                  width="620"
                ></iframe>
                <CardText>
                  <Heading3SC>Thursday Sessions</Heading3SC>
                  <Heading4SC>Housekeeping - 5/7/2020</Heading4SC>
                </CardText>
              </StreamCard>
            </RecentMusicLayout>
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
            <CenteredButton>
              <LinkOutline to="/music">More Music</LinkOutline>
            </CenteredButton>
          </SectionLayout>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default MusicPage;
