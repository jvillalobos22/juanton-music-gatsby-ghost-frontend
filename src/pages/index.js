import React, { useState } from 'react';
import styled from 'styled-components';
// import GoogleFontLoader from 'react-google-font-loader';

// import SEO from "../components/seo";
import { PageBackground } from '../components/Library/Layout';

import juantonLogo from '../images/juanton_logo_cropped.png';
import EnterSiteCTA from '../components/Home/EnterSiteCTA';
import HomePage from '../components/Home/HomePage';

import '../styles/original.css';
import '../styles/global.css';

const LayoutSC = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
`;

const CenteredContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const JuantonLogoCenter = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

const HomeSplashPage = () => {
  const [section, setSection] = useState('splash');

  return (
    <>
      <PageBackground className="homebg">
        {/* <SEO title="Juanton Music | Home" /> */}
        {section === 'splash' ? (
          <LayoutSC>
            <CenteredContent>
              <JuantonLogoCenter
                className="fade-in quick"
                src={juantonLogo}
                alt="JV - Initials of Juan
                  Villalobos"
              />
              <EnterSiteCTA onClick={() => setSection('about')} />
            </CenteredContent>
          </LayoutSC>
        ) : (
          <HomePage setSection={setSection} />
        )}
      </PageBackground>
    </>
  );
};

export default HomeSplashPage;
