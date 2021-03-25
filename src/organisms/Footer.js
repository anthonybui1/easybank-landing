import React from 'react';
import styled from 'styled-components';
import SocialRow from '../molecules/SocialRow';
import FooterLinks from '../molecules/FooterLinks';
import InviteButton from '../atoms/InviteButton';

const Footer = () => {
	return (
		<StyledFooter>
			<LeftFoot>
				<img src='/images/white-logo.svg' alt='Easybank logo' />
				<SocialRow />
			</LeftFoot>
			<FooterLinks />
			<RightFoot>
				<InviteButton />
				<StyledP>© Easybank. All Rights Reserved</StyledP>
			</RightFoot>
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
	@media (min-width: 864px) {
		flex-direction: row;
		justify-content: space-between;
		padding-left: 4rem;
	}
`;

const StyledP = styled.p`
	color: var(--grayish-blue);
	font-size: 0.8rem;
	margin-top: 2rem;
`;

const LeftFoot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 864px) {
		align-items: flex-start;
	}
`;

const RightFoot = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 864px) {
		align-items: flex-end;
		padding-right: 4rem;
	}
`;
