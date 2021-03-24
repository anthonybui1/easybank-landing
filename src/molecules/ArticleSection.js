import React from 'react';
import styled from 'styled-components';

const ArticleSection = ({ imgsrc, imgalt, author, title, content }) => {
	return (
		<Wrapper>
			<StyledImg src={imgsrc} alt={imgalt} />
			<StyledAuthorName>By {author}</StyledAuthorName>
			<StyledH3>{title}</StyledH3>
			<StyledP>{content}</StyledP>
		</Wrapper>
	);
};

export default ArticleSection;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 1.2rem;
  padding-bottom: 1rem;
	border-radius: 5px;
  background-color: white;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
  
`;

const StyledAuthorName = styled.p`
	align-self: flex-start;
  margin-top: 1.5rem;
	padding: 0 1rem;
  color: var(--grayish-blue);
  font-size: 0.6rem;
`;

const StyledH3 = styled.h3`
  margin: 0;
	padding: 0 1rem;
  font-weight: 300;
  font-size: 1rem;
`;

const StyledP = styled.p`
	padding: 0 1rem;
  color: var(--grayish-blue);
  font-size: 0.8rem;
`;
