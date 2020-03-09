import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageWrapper from '../PageWrapper';

const Layout = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  background: transparent;
  height: 100vh;
`;

const AboutSection = ({ setSection }) => (
  <Layout>
    <PageWrapper>
      <h1>Hi, I&rsquo;m Juanton</h1>
      <h2>A tech house producer and DJ in San Francisco</h2>
    </PageWrapper>
  </Layout>
);

AboutSection.propTypes = {
  setSection: PropTypes.func
};

AboutSection.defaultProps = {
  setSection: undefined
};

export default AboutSection;
