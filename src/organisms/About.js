import React from 'react';
import styled from 'styled-components';
import AboutSection from '../molecules/AboutSection';

const About = () => {
	return (
		<Wrapper>
			<StyledH1>Why choose Easybank?</StyledH1>
			<StyledP>
				We leverage Open Banking to turn your bank account into your financial hub. Control your
				finances like never before.
			</StyledP>
			<SectionWrapper>
				<AboutSection
					imgsrc='/images/icon-online.svg'
					imgalt='Icon of a hand holding several credit cards.'
					title='Online Banking'
					content='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
				/>
				<AboutSection
					imgsrc='/images/icon-budgeting.svg'
					imgalt='Icon of phone displaying mobile banking app.'
					title='Simple Budgeting'
					content='See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.'
				/>
				<AboutSection
					imgsrc='/images/icon-onboarding.svg'
					imgalt='Icon of a manager onboarding several recruits'
					title='Fast Onboarding'
					content="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
				/>
				<AboutSection
					imgsrc='/images/icon-api.svg'
					imgalt='Icon of a microchip with many connections.'
					title='Open API'
					content='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
				/>
			</SectionWrapper>
		</Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--light-grayish-blue);
	padding-bottom: 2rem;
	@media (min-width: 864px) {
		padding-left: 4rem;
		align-items: flex-start;
		text-align: start;
	}
`;

const SectionWrapper = styled.div`
	@media (min-width: 864px) {
		display: flex;
		flex-direction: row;
		gap: 4rem;
		padding: 1rem 4rem 3rem 0;
	}
`;

const StyledH1 = styled.h1`
	font-weight: 300;
	color: var(--dark-blue);
	text-align: center;
	margin-top: 4rem;
`;

const StyledP = styled.p`
	margin: 0;
	padding: 0 1.1rem;
	text-align: center;
	color: var(--grayish-blue);
	font-size: 0.8rem;
	line-height: 1.5;
	@media (min-width: 864px) {
		padding: 0;
		text-align: start;
		width: 550px;
	}
`;
