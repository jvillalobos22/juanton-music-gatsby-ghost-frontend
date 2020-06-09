import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import juantonLogo from '../images/juanton_logo_cropped.png';
import { NavButton } from './NavigationDrawer';
import { navigation } from '../helpers/navigation';

const HeaderSC = styled.header`
  background: rgba(0, 0, 0, 0.6);
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

const StyledNav = styled.nav`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const MobileNavButton = styled(NavButton)`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const NavItem = styled(Link)`
  padding: 9px 16px 6px 16px;
  margin-left: 24px;
  border: 1px solid transparent;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active,
  &.selected {
    border: 1px solid #fff;
  }
`;

const Header = ({ className, toggleDrawerOpen, currentPath }) => (
  <HeaderSC className={className}>
    <Layout>
      <HomeLogoButton to="/">
        <img
          src={juantonLogo}
          alt="JV - Initials of Juan
                  Villalobos"
        />
      </HomeLogoButton>
      <MobileNavButton onClick={toggleDrawerOpen} />
      <StyledNav>
        {navigation.map(navItem => {
          const isCurrent = currentPath === navItem.route;
          return (
            <NavItem
              key={navItem.id}
              to={navItem.route}
              className={isCurrent ? 'selected' : ''}
            >
              {navItem.label}
            </NavItem>
          );
        })}
      </StyledNav>
    </Layout>
  </HeaderSC>
);

Header.propTypes = {
  className: PropTypes.string,
  currentPath: PropTypes.string,
  toggleDrawerOpen: PropTypes.func
};

Header.defaultProps = {
  className: ``,
  currentPath: '',
  toggleDrawerOpen: undefined
};

export default Header;
