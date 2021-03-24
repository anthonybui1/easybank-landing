import React from 'react';
import ArticleSection from '../molecules/ArticleSection';
import styled from 'styled-components';

const Articles = () => {
	return (
		<Wrapper>
			<StyledH1>Latest Articles</StyledH1>
			<ArticleSection
				imgsrc='/images/image-currency.jpg'
				imgalt='Various currencies from different nations'
				author='Claire Robinson'
				title='Receive money in any currency with no fees'
				content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
			/>
			<ArticleSection
				imgsrc='/images/image-restaurant.jpg'
				imgalt='A luxurious meal inside fo a fine-dining restaurant.'
				author='Wilson Hutton'
				title='Treat yourself without worrying about money'
				content='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
			/>
			<ArticleSection
				imgsrc='/images/image-plane.jpg'
				imgalt='View of the horizion from the inside of a plane.'
				author='Wilson Hutton'
				title='Take your Easybank card wherever you go'
				content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
			/>
			<ArticleSection
				imgsrc='/images/image-confetti.jpg'
				imgalt='A closeup photo of falling confetti.'
				author='Claire Robinson'
				title='Our invite-only Beta accounts are now live!'
				content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
			/>
		</Wrapper>
	);
};

export default Articles;

const Wrapper = styled.div`
	background-color: var(--very-light-gray);
	padding: 4rem 0;
`;

const StyledH1 = styled.h1`
	font-weight: 300;
	color: var(--dark-blue);
	text-align: center;
`;
