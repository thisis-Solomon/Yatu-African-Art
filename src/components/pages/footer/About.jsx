import React from 'react';
import { AboutData } from './InfoData';

const aboutData = AboutData.map(item => (
	<div>
		<h3>{item.title}</h3>
		<p>{item.info}</p>
	</div>
));

const About = () => {
	return {aboutData};
};

export default About;
