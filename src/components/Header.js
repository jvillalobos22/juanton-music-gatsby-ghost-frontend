import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import juantonLogo from '../images/juanton_logo_cropped.png';

const Layout = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLogoButton = styled(Link)`
  width: 140px;
  display: block;

  img {
    width: 100%;
  }
`;

const StyledNav = styled.nav``;

const NavItem = styled(Link)`
  padding: 5px 12px;
  margin-left: 24px;
  border: 1px solid transparent;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #fff;
  }
`;

const Header = ({ className }) => (
  <header className={className}>
    <Layout>
      <HomeLogoButton to="/">
        <img
          src={juantonLogo}
          alt="JV - Initials of Juan
                  Villalobos"
        />
      </HomeLogoButton>
      <StyledNav>
        <NavItem to="/">Bio</NavItem>
        <NavItem to="/">Music</NavItem>
        <NavItem to="/">Shows</NavItem>
        <NavItem to="/">Media</NavItem>
        <NavItem to="/blog/">Blog</NavItem>
        <NavItem to="/">Get in touch</NavItem>
      </StyledNav>
    </Layout>
  </header>
);

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ``
};

export default Header;
