import React from 'react';
import styled from 'styled-components';

const InviteButton = () => {
	return <StyledBtn>Request Invite</StyledBtn>;
};

export default InviteButton;

const StyledBtn = styled.button`
	color: white;
	font-weight: 700;
	border-radius: 20px;
	border: none;
	padding: 12px 30px;
	background: linear-gradient(90deg, var(--lime-green), var(--bright-cyan));
	cursor: pointer;
`;
