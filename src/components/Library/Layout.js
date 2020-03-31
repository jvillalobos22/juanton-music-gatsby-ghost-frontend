import styled from 'styled-components';
// import HeroImage from '../images/juanton_nye_14_1920x1280.jpg';

export const PageBackground = styled.div`
  width: '100%';
  min-height: 100vh;
  ${'' /* background-image: url(${HeroImage}); */}
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  color: #fff;

  ${'' /* &:after {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    witdth: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  } */}
`;

export const FullHeightLayout = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  background: transparent;
  min-height: calc(100vh - 200px);
  padding-top: 104px;
`;

export const SectionLayout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  ${'' /* min-height: 100vh; */}
  min-height: calc(100vh - 236px);
  padding-top: 36px;
`;

export const SectionHeading = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageHeading = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
