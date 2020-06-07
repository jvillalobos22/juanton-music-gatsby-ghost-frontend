import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import juantonLogo from '../images/juanton_logo_cropped.png';

const HeaderSC = styled.header`
  background: rgba(0, 0, 0, 0.3);
`;

const Layout = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLogoButton = styled(Link)`
  height: 55px;
  width: auto;
  display: block;

  img {
    height: 55px;
    width: auto;
  }
`;

const StyledNav = styled.nav``;

const NavItem = styled(Link)`
  padding: 9px 16px 6px 16px;
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
  <HeaderSC className={className}>
    <Layout>
      <HomeLogoButton to="/">
        <img
          src={juantonLogo}
          alt="JV - Initials of Juan
                  Villalobos"
        />
      </HomeLogoButton>
      <StyledNav>
        <NavItem to="/bio">Bio</NavItem>
        <NavItem to="/music">Music</NavItem>
        <NavItem to="/shows">Shows</NavItem>
        <NavItem to="/media">Media</NavItem>
        <NavItem to="/blog/">Blog</NavItem>
        <NavItem to="/contact">Get in touch</NavItem>
      </StyledNav>
    </Layout>
  </HeaderSC>
);

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ``
};

export default Header;
