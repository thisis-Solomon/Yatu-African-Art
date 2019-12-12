import React from 'react';
import '../styles/MainBody.css'
import Info from './page/Info';

export default function MainBody() {
	return (
		<div className = 'main-container'>
			<Info 
				title = 'Who We Are'
				pageInfo = '"Yatu"​ ("Our own"​) is an organization committed to transforming the African visual arts industry by improving access to global markets through an online community marketplace connecting African art and artists to global collectors, dealers and galleries interested in African art.'
			/>
			<Info 
				title = 'Vision Statement'
				pageInfo = 'To provide a platform for African artist and emerging talent to connect with the global Art community.'
			/>
			<Info 
				title = 'Mission Statement'
				pageInfo = 'To be the most preferred channel in accessing art and crafts on the African Continent'
			/>
			<Info 
				title = 'Our Promise'
				pageInfo = 'To provide secure, timely and dependable services to both local and international clients'
			/>
			<Info 
				title = 'Feedback'
				pageInfo = 'Feel free to contact us for any questions and suggestions you may have to help us serve you better.'
			/>
		</div>
	);
}
