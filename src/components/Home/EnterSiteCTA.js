import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VideoPlayer from '../Library/VideoPlayer';
import { Heading3 } from '../Library/Typography';
import { ButtonOutline } from '../Library/Buttons';

const CallToAction = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const InlineButtons = styled.div`
  display: block;
`;

const EnterSiteButton = styled(ButtonOutline)`
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  border: 1px solid #fff;
  color: #fff;
  margin-bottom: 2rem;
  margin-right: 24px;
  background: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }
`;

// const ResponsiveSoundcloudPlayer = styled.div`
//   width: 100%;
//   margin-top: 3rem;
//   p {
//     margin-bottom: 1.5rem;
//   }
//   iframe {
//     max-width: 700px;
//   }
// `;

const Heading3SC = styled(Heading3)`
  color: #fff;
  width: 100%;
  text-align: center;
`;

// eslint-disable-next-line arrow-body-style
const EnterSiteCTA = ({ onClick }) => {
  // const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // const openPlayer = () => setIsPlayerOpen(true);
  return (
    <CallToAction>
      <Heading3SC>Check out my recent interview with VEM</Heading3SC>
      <InlineButtons>
        <EnterSiteButton onClick={onClick}>Enter Site</EnterSiteButton>
        <VideoPlayer videoId={'FrqkJLtjTlM'} hidePlayerWhenClosed />
      </InlineButtons>
      {/* <ResponsiveSoundcloudPlayer>
        <p>New music out now on Late Night Munchies!</p>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/690362245&color=%230d0c0c&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
        ></iframe>
      </ResponsiveSoundcloudPlayer> */}
    </CallToAction>
  );
};

EnterSiteCTA.propTypes = {
  onClick: PropTypes.func
};

EnterSiteCTA.defaultProps = {
  onClick: undefined
};

export default EnterSiteCTA;
