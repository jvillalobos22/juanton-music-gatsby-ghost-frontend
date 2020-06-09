import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import juantonLogo from '../images/juanton_logo_cropped.png';
import {
  faInstagram,
  faYoutube,
  faTwitch,
  faFacebook,
  faSpotify,
  faSoundcloud,
  faMixcloud
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { juantonLinks } from '../helpers/links';
import { Heading4 } from './Library/Typography';
import { navigation } from '../helpers/navigation';

import '../styles/app.css';

/**
 * Footer component
 *
 * The Footer component sits at the bottom of each page and template.
 *
 */

const FooterSC = styled.footer`
  margin-top: 96px;
  background: #3e3e3e;
`;

const FooterLogoButton = styled(Link)`
  height: 55px;
  width: auto;
  display: block;

  img {
    height: 55px;
    width: auto;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 100px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  section {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    section {
      width: 100%;
    }
  }
`;

const FullWidthSection = styled.div`
  width: 100%;
  background: #111;
  .copyright {
    padding: 32px 16px 32px;
    text-align: center;
  }
`;

const SectionLeft = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    order: 2;
    justify-content: center;
  }
`;

const SectionRight = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  aling-items: center;
  height: 100%;

  @media screen and (max-width: 767px) {
    order: 1;
    margin-bottom: 48px;
    justify-content: center;
  }
`;

const FooterNav = styled.div`
  a {
    margin-right: 24px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const SocialIconsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  && {
    font-size: 24px;
    margin: 0 16px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
`;

const FooterHeading = styled(Heading4)`
  font-size: 18px;
  margin: 28px 0;
  color: #fff;
  a {
    font-size: inherit;
    color: #b71c1c;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    margin: 0 0 28px 0;
  }
`;

const NavItem = styled(Link)`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    transform: scale(1.2, 1.2);
    color: #b71c1c;
    font-weight: 600;
  }
`;

const Footer = ({ data, className }) => {
  const site = data.allGhostSettings.edges[0].node;

  const currentYear = new Date().getFullYear();
  return (
    <FooterSC className={`${className}`}>
      <FooterContent>
        <SectionLeft>
          <FooterNav>
            {navigation.map(navItem => (
              <NavItem key={navItem.id} to={navItem.route}>
                {navItem.label}
              </NavItem>
            ))}
          </FooterNav>
          <FooterHeading>
            Bookings:{' '}
            <a href="mailto:bookings@juantonmusic.com">
              bookings@juantonmusic.com
            </a>
          </FooterHeading>
          <SocialIconsContainer>
            <SocialIcon
              className="icon"
              href={juantonLinks.spotify.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.soundcloud.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSoundcloud} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.twitch.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.youtube.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </SocialIcon>
            <SocialIcon
              className="icon"
              href={juantonLinks.mixcloud.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMixcloud} />
            </SocialIcon>
          </SocialIconsContainer>
        </SectionLeft>

        <SectionRight>
          <FooterLogoButton to="/">
            <img
              src={juantonLogo}
              alt="JV - Initials of Juan
                  Villalobos"
            />
          </FooterLogoButton>
        </SectionRight>
      </FooterContent>
      <FullWidthSection>
        <div className="copyright">
          ©Copyright&nbsp;{currentYear}&nbsp;
          <Link to="/">{site.title}</Link>
        </div>
      </FullWidthSection>
    </FooterSC>
  );
};

Footer.propTypes = {
  bodyClass: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.shape({
    file: PropTypes.object,
    allGhostSettings: PropTypes.object.isRequired
  }).isRequired
};

const FooterSettingsQuery = props => (
  <StaticQuery
    query={graphql`
      query GhostSettingsFooter {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
        file(relativePath: { eq: "ghost-icon.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
);

export default FooterSettingsQuery;
