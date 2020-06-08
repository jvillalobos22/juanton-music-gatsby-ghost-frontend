import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigation } from '../helpers/navigation';

const NavButtonSC = styled.button`
  outline: none;
  transition: all 0.2s cubic-bezier(0, 1.26, 0.8, 1.28);
  background: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;
const FontAwesomeIconSC = styled(FontAwesomeIcon)`
  font-size: 32px;
  margin-bottom: 2px;
  margin-left: 8px;
`;

export const NavButton = ({ onClick, className }) => (
  <NavButtonSC className={className} onClick={onClick}>
    <FontAwesomeIconSC icon={faBars} />
  </NavButtonSC>
);

NavButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};
NavButton.defaultProps = {
  onClick: undefined,
  className: ''
};

const DrawerMenuLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;

  &.hide {
    transform: translate3d(-100vw, 0, 0);
  }

  &.show {
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
  }
`;

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DrawerNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(Link)`
  padding: 9px 16px 6px 16px;
  border: 1px solid transparent;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

const CloseNavButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;

  outline: none;
  transition: all 0.2s cubic-bezier(0, 1.26, 0.8, 1.28);
  background: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
  }
`;

export const DrawerMenu = ({ isDrawerOpen, onClose }) => {
  const visibility = isDrawerOpen ? 'show' : 'hide';

  return (
    <DrawerMenuLayout id="flyoutMenu" className={visibility}>
      <LayoutContainer>
        <CloseNavButton onClick={() => onClose()}>
          <FontAwesomeIconSC icon={faTimes} />
        </CloseNavButton>
        <DrawerNavContainer>
          {navigation.map(navItem => (
            <NavItem key={navItem.id} to={navItem.route}>
              {navItem.label}
            </NavItem>
          ))}
        </DrawerNavContainer>
      </LayoutContainer>
    </DrawerMenuLayout>
  );
};

DrawerMenu.propTypes = {
  isDrawerOpen: PropTypes.bool,
  onClose: PropTypes.func
};
DrawerMenu.defaultProps = {
  isDrawerOpen: false,
  onClose: undefined
};
