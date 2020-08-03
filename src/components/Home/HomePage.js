import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageWrapper from '../PageWrapper';
import { Heading1, Heading4, Heading3 } from '../Library/Typography';
import { FullHeightLayout, SectionLayout } from '../Library/Layout';
import MailchimpSignupForm from '../Library/MailchimpSignupForm';

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: calc(100vh - 236px);
`;

const Heading1SC = styled(Heading1)`
  width: 100%;
  margin-bottom: 24px;
`;

const Heading3SC = styled(Heading3)`
  width: 100%;
`;

const HeroHeading = styled.div`
  width: 50%;

  @media screen and (max-width: 967px) {
    width: 100%;
  }
`;

const SectionBody = styled.div`
  width: 40%;
  align-self: flex-end;
  margin-bottom: 0;

  @media screen and (max-width: 967px) {
    width: 100%;
    padding-top: 32px;
  }
`;

const SectionLayoutSC = styled(SectionLayout)`
  && {
    align-items: center;
  }
`;

const HomePage = () => (
  <FullHeightLayout>
    <PageWrapper>
      <SectionLayoutSC>
        <HeroSection>
          <HeroHeading>
            <Heading1SC>Hi, I&rsquo;m Juanton</Heading1SC>
            <Heading3SC>
              A tech house producer and DJ in San Francisco
            </Heading3SC>
            <Heading4>
              Check out my livestream every Monday at 6pm PST where I produce my
              own tracks live, share production techniques and give feedback on
              viewer submitted tracks.
            </Heading4>
          </HeroHeading>
          <SectionBody>
            {/* <MailchimpSignupForm message="Want production tips & tricks straight to your inbox? Sign up below for the latest news on Juanton, exclusive free downloads of my tracks and production racks, and all the latest Juanton news." /> */}
            <MailchimpSignupForm message="Want production tips & tricks straight to your inbox?" />
          </SectionBody>
        </HeroSection>
      </SectionLayoutSC>
    </PageWrapper>
  </FullHeightLayout>
);

export default HomePage;
