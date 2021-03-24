import React from 'react';
import styled from 'styled-components';
import SocialRow from '../molecules/SocialRow';
import FooterLinks from '../molecules/FooterLinks';
import InviteButton from '../atoms/InviteButton';

const Footer = () => {
	return (
		<StyledFooter>
			<img src='/images/white-logo.svg' alt='Easybank logo' />
      <SocialRow />
      <FooterLinks />
      <InviteButton />
      <StyledP>© Easybank. All Rights Reserved</StyledP>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	background-color: var(--dark-blue);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
  img {
    cursor: pointer;
  }
`;

const StyledP = styled.p`
  color: var(--grayish-blue);
  font-size: 0.8rem;
  margin-top: 2rem;
`;