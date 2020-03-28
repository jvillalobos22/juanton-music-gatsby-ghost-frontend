import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageWrapper from '../PageWrapper';
import { Heading1, Heading3 } from '../Library/Typography';
import { FullHeightLayout, SectionLayout } from '../Library/Layout';
import MailchimpSignupForm from '../Library/MailchimpSignupForm';

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100vh;
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
`;

const SectionBody = styled.div`
  width: 40%;
  align-self: flex-end;
  margin-bottom: 64px;
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
          </HeroHeading>
          <SectionBody>
            <MailchimpSignupForm />
          </SectionBody>
        </HeroSection>
      </SectionLayoutSC>
    </PageWrapper>
  </FullHeightLayout>
);

export default HomePage;
