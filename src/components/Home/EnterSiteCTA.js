import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading3 } from '../Library/Typography';
import { ButtonOutline, AnchorOutline } from '../Library/Buttons';

const CallToAction = styled.div`
  width: 100%;
  margin-top: 64px;
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

  a {
    margin-right: 0;
  }
  @media screen and (max-width: 967px) {
    display: flex;
    flex-direction: column;

    button,
    a {
      margin-right: 0;
    }
  }
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
  background: rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }

  @media screen and (max-width: 539px) {
    order: 2;
  }
`;

const PlayNowButton = styled(AnchorOutline)`
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
  background: rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }

  @media screen and (max-width: 539px) {
    order: 1;
  }
`;

const Heading3SC = styled(Heading3)`
  color: #fff;
  width: 100%;
  text-align: center;
  margin-bottom: 48px;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
`;

const TrackTitle = styled(Heading3)`
  color: #fff;
  width: 100%;
  margin: 0;
  font-size: 44px;
  text-align: center;
  color: #b71c1c;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
`;

const EnterSiteCTA = ({ onClick }) => (
  <CallToAction className="fade-in two">
    <TrackTitle>My 808</TrackTitle>
    <Heading3SC>Out Now on OKNF!</Heading3SC>
    <InlineButtons>
      <EnterSiteButton onClick={onClick}>Enter Site</EnterSiteButton>
      <PlayNowButton
        href="https://juantonmusic.fanlink.to/juanton-my808"
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen Now
      </PlayNowButton>
    </InlineButtons>
  </CallToAction>
);

EnterSiteCTA.propTypes = {
  onClick: PropTypes.func
};

EnterSiteCTA.defaultProps = {
  onClick: undefined
};

export default EnterSiteCTA;
