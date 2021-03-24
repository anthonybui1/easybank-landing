import React from 'react';
import styled from 'styled-components';

const Hero = () => {
	return (
		<div>
			<HeroImage src='/images/bg-intro-mobile.svg' alt='Background splash image' />
			<MockupImage src='/images/image-mockups.png' alt='Mobile layout for Easybank app' />
		</div>
	);
};

export default Hero;

const HeroImage = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	z-index: -10;
`;

const MockupImage = styled.img`
	padding: 1rem;
	width: 100%;
	height: auto;
	position: absolute;
	top: -4rem;
	z-index: -10;
`;