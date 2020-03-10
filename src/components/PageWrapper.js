import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Header from './Header';

const PageContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  a,
  span {
    color: #fff;
  }
`;

const HeaderSC = styled(Header)`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
`;

const PageWrapper = ({ children }) => (
  <>
    <HeaderSC />
    <PageContent>{children}</PageContent>
  </>
);

PageWrapper.propTypes = {
  siteTitle: PropTypes.string
};

PageWrapper.defaultProps = {
  siteTitle: ''
};

export default PageWrapper;
