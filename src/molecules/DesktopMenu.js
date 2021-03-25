import React from 'react';
import styled from 'styled-components';

const DesktopMenu = () => {
	return (
		<Wrapper>
			<StyledAnchor>Home</StyledAnchor>
			<StyledAnchor>About</StyledAnchor>
			<StyledAnchor>Contact</StyledAnchor>
			<StyledAnchor>Blog</StyledAnchor>
			<StyledAnchor>Careers</StyledAnchor>
		</Wrapper>
	);
};

export default DesktopMenu;

const Wrapper = styled.nav`
	display: flex;
	height: 100%;
	margin: 0 0.5rem;
`;

const StyledAnchor = styled.a`
	display: block;
	height: 100%;
	padding: 25px 0;
	color: var(--grayish-blue);
	cursor: pointer;
	margin-left: 2rem;
	border-bottom: 4px solid white;
	&:hover {
		color: var(--dark-blue);
		border-bottom: 4px solid var(--medium-emerald);
	}
`;
