import React, { useState } from 'react';
import styled from 'styled-components';

const MobileMenu = () => {
	const [isShowing, setIsShowing] = useState(false);

	const handleClick = () => {
		setIsShowing(!isShowing);
	};

	return (
		<Wrapper>
			{isShowing === false ? (
				<svg onClick={handleClick} xmlns='http://www.w3.org/2000/svg' width='24' height='19'>
					<g fill='#2D314D' fillRule='evenodd'>
						<path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' />
					</g>
				</svg>
			) : (
				<svg onClick={handleClick} xmlns='http://www.w3.org/2000/svg' width='18' height='19'>
					<g fill='#2D314D' fillRule='evenodd'>
						<path d='M.868.661l16.97 16.97-.706.708L.162 1.369z' />
						<path d='M.161 17.632L17.131.662l.708.706-16.97 16.97z' />
					</g>
				</svg>
			)}
			{isShowing ? (
				<DropdownMenu>
					<StyledAnchor>Home</StyledAnchor>
					<StyledAnchor>About</StyledAnchor>
					<StyledAnchor>Contact</StyledAnchor>
					<StyledAnchor>Blog</StyledAnchor>
					<StyledAnchor>Careers</StyledAnchor>
				</DropdownMenu>
			) : null}
		</Wrapper>
	);
};

export default MobileMenu;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

const DropdownMenu = styled.nav`
	display: ${(props) => (props.isShowing ? 'block' : 'none')};
	position: fixed;
	width: 90%;
	height: 300px;
	top: 70px;
	left: 5%;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.3rem;
	background-color: var(--very-light-gray);
	box-shadow: 0 50px 100px 50px rgba(45, 49, 77, 0.4);
`;

const StyledAnchor = styled.a`
	display: block;
	color: var(--dark-blue);
	cursor: pointer;
	font-weight: 400;
`;
