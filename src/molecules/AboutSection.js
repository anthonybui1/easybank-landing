import React from 'react';
import styled from 'styled-components';

const AboutSection = ({ imgsrc, imgalt, title, content }) => {
	return (
		<Wrapper>
			<img src={imgsrc} alt={imgalt} />
			<StyledH2>{title}</StyledH2>
			<StyledP>{content}</StyledP>
		</Wrapper>
	);
};

export default AboutSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  @media (min-width: 864px) {
		text-align: start;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
	}
`;

const StyledH2 = styled.h2`
  color: var(--dark-blue);
  font-weight: 300;
`;

const StyledP = styled.p`
  color: var(--grayish-blue);
  font-size: 0.8rem;
  margin: 0;
  padding: 0 1.1rem;
  line-height: 1.5;
	@media (min-width: 864px) {
    padding-left: 0;
	}
`;
