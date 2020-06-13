import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 64px;
  font-weight: 300;
  display: block;
  margin-bottom: 40px;
  line-height: 1.4;

  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 967px) {
  }
  @media screen and (max-width: 749px) {
    font-size: 48px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 599px) {
  }
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  display: block;
  margin-bottom: 24px;
  letter-spacing: 1px;
  line-height: 1.4;
`;

export const Heading3 = styled.h3`
  font-size: 28px;
  font-weight: 400;
  display: block;
  margin-bottom: 24px;
  line-height: 1.4;

  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 967px) {
  }
  @media screen and (max-width: 749px) {
    font-size: 24px;
  }
  @media screen and (max-width: 599px) {
  }
`;

export const Heading4 = styled.h4`
  font-size: 24px;
  font-weight: 300;
  display: block;
  margin-bottom: 20px;
`;

export const Body1 = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  display: block;
  margin-bottom: 16px;
`;
