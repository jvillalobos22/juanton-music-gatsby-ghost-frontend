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
import { Heading2, Body1, Heading3 } from '../components/Library/Typography';
import VideoPlayer from '../components/Library/VideoPlayer';

import '../styles/global.css';
import { AnchorOutline } from '../components/Library/Buttons';
import PageMeta from '../components/Library/PageMeta';

const meta = {
  meta_title: 'Media | Juanton Music',
  meta_description:
    'Learn about Juanton and where he has been in this interview with Voice of Electronic Music',
  canonical: 'https://juantonmusic.com/media',
  og_title: 'Juanton in the Media',
  og_description:
    'Learn about Juanton and where he has been in this interview with Voice of Electronic Music',
  og_site_name: 'Juanton Music',
  og_type: 'website',
  twitter_title: 'Juanton in the Media',
  twitter_description:
    'Learn about Juanton and where he has been in this interview with Voice of Electronic Music',
  twitter_site: '@juantonmusic',
  twitter_creator: '@juantonmusic'
};

const VideoPlayerLayout = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const ContentLayout = styled.div`
  width: 100%;
  max-width: 800px;
  display: block;
  margin: 0 auto 36px auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MediaPage = ({ location }) => (
  <>
    <PageBackground className="pagebg">
      <PageMeta meta={meta} />
      <FullHeightLayout>
        <PageWrapper currentPath={location.pathname}>
          <SectionLayout>
            <SectionHeading>
              <Heading2>Juanton in the Media</Heading2>
            </SectionHeading>
            <ContentLayout>
              <ButtonContainer>
                <AnchorOutline
                  href="/pdf/JuantonEPK.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download EPK
                </AnchorOutline>
              </ButtonContainer>
              <SectionHeading>
                <Heading3>Interview with Voice of Electronic Music</Heading3>
              </SectionHeading>
              <Body1>
                I recently sat down with Scott Brio from the Voice of Electronic
                Music podcast. We had a great chat about my background, getting
                started in music and some of the things I think are most
                important for new producers that are just getting started. There
                is a lot of great content baked into it so please check it out
                and follow VEM on YouTube to see even more great interviews with
                up and comers in the music community.
              </Body1>
            </ContentLayout>
            <VideoPlayerLayout>
              <VideoPlayer videoId={'FrqkJLtjTlM'} />
            </VideoPlayerLayout>
          </SectionLayout>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

MediaPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default MediaPage;
