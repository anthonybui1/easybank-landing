import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<StyledNav>
			<img src="/images/logo.svg" alt="Easybank logo" />
			<img src="/images/icon-hamburger.svg" alt="Mobile menu button" />
		</StyledNav>
	);
};

export default Header;

const StyledNav = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: white;
	img {
		cursor: pointer;
	}
`;
