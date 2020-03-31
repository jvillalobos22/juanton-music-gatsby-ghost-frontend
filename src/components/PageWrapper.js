import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  ${'' /* min-height: 100vh; */}
  min-height: calc(100vh - 200px);
  max-width: 1300px;
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
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
`;

const PageWrapper = ({ children }) => (
  <>
    <HeaderSC />
    <PageContent>{children}</PageContent>
    <Footer />
  </>
);

PageWrapper.propTypes = {
  siteTitle: PropTypes.string
};

PageWrapper.defaultProps = {
  siteTitle: ''
};

export default PageWrapper;
