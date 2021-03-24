import React from 'react';
import styled from 'styled-components';
import InviteButton from '../atoms/InviteButton';

const Hero = () => {
	return (
		<Wrapper>
			<BackgroundImg src='/images/bg-intro-mobile.svg' alt='Background splash image' />
			<MockupImg src='/images/image-mockups.png' alt='Mobile layout for Easybank app' />
			<StyledH1>Next generation digital banking</StyledH1>
			<StyledP>
				Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
				saving, budgeting, investing, and much more.
			</StyledP>
			<InviteButton />
		</Wrapper>
	);
};

export default Hero;

const Wrapper = styled.div`
	background-color: var(--very-light-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
`;

const BackgroundImg = styled.img`
	width: 100%;
  margin-bottom: -2rem;
`;

const MockupImg = styled.img`
	padding: 1rem;
	width: 100%;
	height: auto;
	position: absolute;
	top: -4rem;
	left: 0;
`;

const StyledH1 = styled.h1`
	position: relative;
	color: var(--dark-blue);
	font-weight: 300;
	text-align: center;
	margin: 0;
`;

const StyledP = styled.p`
	position: relative;
	margin-top: 0;
	padding: 1rem;
	text-align: center;
	color: var(--grayish-blue);
	font-size: 0.8rem;
	line-height: 1.5;
`;

