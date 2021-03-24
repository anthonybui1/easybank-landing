import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Header = () => {
	return (
		<StyledNav>
			<Image src='/images/logo.svg' alt='Easybank logo' height={25} width={150} className='logo' />
			<Image
				src='/images/icon-hamburger.svg'
				alt='Mobile menu button'
				height={12}
				width={30}
				className='menu'
			/>
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
