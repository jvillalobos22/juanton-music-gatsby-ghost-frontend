import React, { useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Heading3, Body1 } from '../Library/Typography';
import { ButtonOutline } from '../Library/Buttons';

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #fff;
  height: 50px;
  width: 100%;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const SignUpButton = styled(ButtonOutline)`
  margin-top: 16px;
  margin-bottom: 0;
`;

const MailchimpSignupForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  const handleNameChange = event => {
    setFirstName(event.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(email, { firstName })
      // eslint-disable-next-line no-unused-vars
      .then(data => {
        console.log('addToMailchimp response: ', data);
        setFormCompleted(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return formCompleted ? (
    <>
      <Heading3>Thanks for signing up.</Heading3>{' '}
      <Body1>
        Check your inbox for a verification email and click through to receive a
        free ableton rack from my last track as well as a video explaining how
        to use it for your own productions. Cheers!
      </Body1>
    </>
  ) : (
    <>
      <Body1>
        Would you like a free Ableton rack I used while creating my most recent
        track?
      </Body1>
      <Body1>Sign up for my email list below</Body1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <StyledInput name="email" type="email" onChange={handleEmailChange} />
        <label htmlFor="name">First Name</label>
        <StyledInput type="text" name="name" onChange={handleNameChange} />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </form>
    </>
  );
};

export default MailchimpSignupForm;
