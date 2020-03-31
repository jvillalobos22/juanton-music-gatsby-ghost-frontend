import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

import { Navigation } from './common/';
import config from '../utils/siteConfig';
import juantonLogo from '../images/juanton_logo_cropped.png';

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
  padding: 40px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  section {
    width: 50%;
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
  justify-content: flex-start;
`;

const SectionRight = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const SocialButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const FooterNav = styled.div`
  a {
    margin-right: 24px;
  }
`;

const Footer = ({ data, className }) => {
  const site = data.allGhostSettings.edges[0].node;
  const twitterUrl = site.twitter
    ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
    : null;
  const facebookUrl = site.facebook
    ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
    : null;

  const currentYear = new Date().getFullYear();
  return (
    <FooterSC className={`${className}`}>
      <FooterContent>
        <SectionLeft>
          <FooterNav>
            <Navigation data={site.navigation} navClass="site-foot-nav-item" />
          </FooterNav>
        </SectionLeft>

        <SectionRight>
          <SocialButtons>
            {site.twitter && (
              <a
                href={twitterUrl}
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="site-nav-icon"
                  src="/images/icons/twitter.svg"
                  alt="Twitter"
                />
              </a>
            )}

            {site.facebook && (
              <a
                href={facebookUrl}
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="site-nav-icon"
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                />
              </a>
            )}

            <a
              className="site-nav-item"
              href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/rss.svg"
                alt="RSS Feed"
              />
            </a>
          </SocialButtons>

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
  children: PropTypes.node.isRequired,
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
