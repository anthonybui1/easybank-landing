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
			<AboutSection
				imgsrc='/images/icon-online.svg'
				imgalt='Hand holding credit cards'
				title='Online Banking'
				content='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
			/>
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
`;

const StyledH1 = styled.h1`
	font-weight: 300;
	color: var(--dark-blue);
	text-align: center;
	margin-top: 4rem;
`;

const StyledP = styled.p`
	margin: 0;
	padding: 0 1rem;
	text-align: center;
	color: var(--grayish-blue);
	font-size: 0.8rem;
	line-height: 1.5;
`;
