import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ButtonOutline = styled(({ children, ...rest }) => (
  <button {...rest}>{children}</button>
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  border: 1px solid #fff;
  color: #fff;
  margin-bottom: 2rem;
  background: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }
`;

export const LinkOutline = styled(({ children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  border: 1px solid #fff;
  color: #fff;
  margin-bottom: 2rem;
  background: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    color: #222;
  }
`;
