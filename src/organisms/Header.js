import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DesktopMenu from '../molecules/DesktopMenu';
import MobileMenu from '../molecules/MobileMenu';
import InviteButton from '../atoms/InviteButton';

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(null);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		return () => window.removeEventListener('resize', () => console.log('Cleanup!'));
	}, []);

	return (
		<Wrapper>
			<img src='/images/logo.svg' alt='Easybank logo' />
			{windowWidth > 864 ? (
				<>
					<DesktopMenu />
					<InviteButton />
				</>
			) : (
				<MobileMenu />
			)}
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: white;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
	img {
		cursor: pointer;
	}
	@media (min-width: 864px) {
		padding: 0 4rem;
	}
`;
