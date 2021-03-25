import React from 'react';
import styled from 'styled-components';

const FooterLinks = () => {
	return (
		<Wrapper>
			<StyledAnchor href='#'>About Us</StyledAnchor>
			<StyledAnchor href='#'>Contact</StyledAnchor>
			<StyledAnchor href='#'>Blog</StyledAnchor>
			<StyledAnchor href='#'>Careers</StyledAnchor>
			<StyledAnchor href='#'>Support</StyledAnchor>
			<StyledAnchor href='#'>Privacy Policy</StyledAnchor>
		</Wrapper>
	);
};

export default FooterLinks;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
	@media (min-width: 864px) {
		max-height: 100px;
		align-items: flex-start;
		flex-wrap: wrap;
		flex-basis: 350px;
		margin-right: 200px;
	}
`;

const StyledAnchor = styled.a`
  color: white;
  font-size: 0.9rem;
	&:hover {
		color: var(--medium-emerald);
	}
`;
