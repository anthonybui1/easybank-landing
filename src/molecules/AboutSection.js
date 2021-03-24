import React from 'react';
import styled from 'styled-components';

const AboutSection = ({ imgsrc, imgalt, title, content }) => {
	return (
		<Wrapper>
			<img src={imgsrc} alt={imgalt} />
			<StyledH1>{title}</StyledH1>
			<StyledP>{content}</StyledP>
		</Wrapper>
	);
};

export default AboutSection;

const Wrapper = styled.div``;

const StyledH1 = styled.h1``;

const StyledP = styled.p``;
