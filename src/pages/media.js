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
import VideoPlayer from '../components/Library/VideoPlayer';

// import '../styles/original.css';
import '../styles/global.css';

const VideoPlayerLayout = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const MediaPage = () => (
  <>
    <PageBackground className="homebg">
      <FullHeightLayout>
        <PageWrapper>
          <SectionLayout>
            <SectionHeading>
              <Heading2>Juanton in the Media</Heading2>
            </SectionHeading>
            <VideoPlayerLayout>
              <VideoPlayer videoId={'FrqkJLtjTlM'} />
            </VideoPlayerLayout>
          </SectionLayout>
        </PageWrapper>
      </FullHeightLayout>
    </PageBackground>
  </>
);

export default MediaPage;
