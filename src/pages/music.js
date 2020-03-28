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
import { LinkOutline } from '../components/Library/Buttons';
import { ResponsiveSoundcloudPlayer } from '../components/Library/ResponsiveSoundcloudPlayer';

import '../styles/original.css';
import '../styles/global.css';

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

const MusicPage = () => (
  <>
    <PageBackground className="homebg">
      <FullHeightLayout>
        <PageWrapper>
          <SectionLayout>
            <SectionHeading>
              <Heading2>Recent Music & Mixes</Heading2>
            </SectionHeading>
            <ResponsiveSoundcloudPlayerSC>
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/936802876%3Fsecret_token%3Ds-89yBQ&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              ></iframe>
              <CenteredButton>
                <LinkOutline to="/music">More Music</LinkOutline>
              </CenteredButton>
            </ResponsiveSoundcloudPlayerSC>
          </SectionLayout>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default MusicPage;
