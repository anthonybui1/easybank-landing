import React from 'react';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Articles from '../organisms/Articles';

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Articles />
		</div>
	);
};

export default Home;
