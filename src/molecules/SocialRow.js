import React from 'react';
import styled from 'styled-components';

const SocialRow = () => {
	return (
		<Row>
			<img src='/images/icon-facebook.svg' alt='Facebook icon' />
			<img src='/images/icon-youtube.svg' alt='Facebook icon' />
			<img src='/images/icon-twitter.svg' alt='Facebook icon' />
			<img src='/images/icon-pinterest.svg' alt='Facebook icon' />
			<img src='/images/icon-instagram.svg' alt='Facebook icon' />
		</Row>
	);
};

export default SocialRow;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 2rem 0;
  img {
    cursor: pointer;
    transform: scale(1.2);
  }
`;