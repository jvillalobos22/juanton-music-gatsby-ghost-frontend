import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { DrawerMenu } from './NavigationDrawer';

const PageContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  ${'' /* min-height: 100vh; */}
  min-height: calc(100vh - 200px);
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;

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

  @media screen and (max-width: 967px) {
    padding: 0 24px;
  }
  @media screen and (max-width: 539px) {
  }
`;

const HeaderSC = styled(Header)`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
`;

const PageWrapper = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);

  const handleMouseDown = e => {
    toggleDrawerOpen();

    e.stopPropagation();
  };

  return (
    <>
      <DrawerMenu isDrawerOpen={isDrawerOpen} onClose={toggleDrawerOpen} />
      <HeaderSC
        toggleDrawerOpen={toggleDrawerOpen}
        handleMouseDown={handleMouseDown}
      />
      <PageContent>{children}</PageContent>
      <Footer />
    </>
  );
};

PageWrapper.propTypes = {
  siteTitle: PropTypes.string
};

PageWrapper.defaultProps = {
  siteTitle: ''
};

export default PageWrapper;
