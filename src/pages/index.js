import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

import { PageBackground } from '../components/Library/Layout';

import juantonLogo from '../images/juanton_logo_cropped.png';
import EnterSiteCTA from '../components/Home/EnterSiteCTA';
import HomePage from '../components/Home/HomePage';
import PageMeta from '../components/Library/PageMeta';

import '../styles/global.css';

const meta = {
  meta_title:
    'Juanton Music | Tech House Music Production Tips, Tricks & Tutorials',
  meta_description:
    'Juanton is a tech house music producer from San Francisco, sharing tips, tricks and tutorials. You can find Juan streaming live tech house production on Twitch every Monday at 6pm PST.',
  canonical: 'https://juantonmusic.com',
  og_site_name: 'Juanton Music',
  og_type: 'website',
  twitter_site: '@juantonmusic',
  twitter_creator: '@juantonmusic'
};

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
  padding: 0 24px;

  @media screen and (max-width: 967px) {
    align-items: flex-start;
  }
`;

const CenteredContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 967px) {
    width: 100%;
  }
`;

const JuantonLogoCenter = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 17.5rem;

  @media screen and (max-width: 1500px) {
    margin-bottom: 8.5rem;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 48px;
    margin-bottom: 6.5rem;
  }

  @media screen and (max-width: 976px) {
    margin-top: 48px;
    margin-bottom: 3.5rem;
  }

  @media screen and (max-width: 539px) {
    width: 70%;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-height: 600px) {
    width: 70%;
    margin-bottom: 0;
  }
`;

const HomeSplashPage = () => {
  const [section, setSection] = useState('splash');
  const [cookies, setCookie] = useCookies(['hasVisitedHome']);

  const { hasVisitedHome } = cookies;

  useEffect(() => {
    if (hasVisitedHome) {
      setSection('about');
    }
  }, [hasVisitedHome]);

  const enterSite = () => {
    setSection('about');
    setCookie('hasVisitedHome', true, { path: '/' });
  };

  return (
    <>
      <PageBackground className="homebg">
        <PageMeta meta={meta}>
          <meta
            property="og:image"
            content="https://juantonmusic.com/images/juanton-music-eye-heart-nye-dillon-francis.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta
            property="og:image:alt"
            content="Juanton playing a silent disco DJ set at Eye Heart NYE 2020 with Dillon Francis"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://juantonmusic.com/images/juanton-music-eye-heart-nye-dillon-francis.png"
          />
        </PageMeta>
        {section === 'splash' ? (
          <LayoutSC>
            <CenteredContent>
              <JuantonLogoCenter
                className="fade-in quick"
                src={juantonLogo}
                alt="JV - Initials of Juan
                  Villalobos"
              />
              <EnterSiteCTA onClick={enterSite} />
            </CenteredContent>
          </LayoutSC>
        ) : (
          <HomePage />
        )}
      </PageBackground>
    </>
  );
};

export default HomeSplashPage;
