import React from 'react';
import styled from 'styled-components';
import InviteButton from '../atoms/InviteButton';

const Hero = () => {
	return (
		<Section>
			<ImgWrapper>
				<picture>
					<source media='(min-width:864px)' srcSet='/images/bg-intro-desktop.svg' />
					<BackgroundImg src='/images/bg-intro-mobile.svg' />
				</picture>
				<MockupImg src='/images/image-mockups.png' alt='Mobile layout for Easybank app' />
			</ImgWrapper>
			<ContentWrapper>
				<StyledH1>Next generation digital banking</StyledH1>
				<StyledP>
					Take your financial life online. Your Easybank account will be a one-stop-shop for
					spending, saving, budgeting, investing, and much more.
				</StyledP>
				<InviteButton />
			</ContentWrapper>
		</Section>
	);
};

export default Hero;

const Section = styled.section`
	background-color: var(--very-light-gray);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 4rem;
	@media (min-width: 864px) {
		height: 80vh;
		flex-direction: row-reverse;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 864px) {
		align-items: flex-start;
		height: 100%;
		width: 35%;
		gap: 1rem;
		padding-left: 4rem;
	}
`;

const ImgWrapper = styled.div`
	width: 100%;
	@media (min-width: 864px) {
		overflow-x: hidden;
	}
`;

const BackgroundImg = styled.img`
	width: 100%;
	max-height: 500px;
	margin-bottom: -2rem;
	position: absolute;
	@media (min-width: 864px) {
		width: 150%;
		height: 150%;
		max-height: 1000px;
		position: relative;
		top: 400px;
	}
`;

const MockupImg = styled.img`
	width: 90%;
	max-width: 500px;
	height: auto;
	position: relative;
	top: -3.5rem;
	left: 5%;
	@media (min-width: 512px) {
		left: 10%;
	}
	@media (min-width: 864px) {
		width: auto;
		max-width: none;
		max-height: 1000px;
		top: -23rem;
		left: 125px;
	}
	@media (min-width: 1024px) {
		top: -25rem;
		left: 400px;
	}
`;

const StyledH1 = styled.h1`
	position: relative;
	color: var(--dark-blue);
	font-size: 2.2rem;
	font-weight: 300;
	text-align: center;
	margin: 0;
	@media (min-width: 864px) {
		font-size: 2.5rem;
		text-align: start;
	}
`;

const StyledP = styled.p`
	position: relative;
	padding: 0 1.1rem;
	text-align: center;
	color: var(--grayish-blue);
	font-size: 0.8rem;
	line-height: 1.5;
	@media (min-width: 864px) {
		text-align: start;
		padding: 0;
	}
`;
