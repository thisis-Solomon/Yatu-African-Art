import React, { useState } from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlideBar from '../pages/main/SlideBar';

export default function Header() {
	const [isSlideBarOpen, setIsSlideBarOpen] = useState(false); 

	const openHandler = () => {
		setIsSlideBarOpen(!isSlideBarOpen);
		console.log(isSlideBarOpen)
	};

	let openSlideBar;
	if(isSlideBarOpen){
		openSlideBar = <SlideBar close = {openHandler}/>
	}
	return (
		<div style={styles.headerContainer}>
			<div>
				{/* Menu bar here */}
				<menu id='toggle' onClick={openHandler}>
					<FontAwesomeIcon icon={faBars} size='2x' />
				</menu>
			</div>
			<div className='font-title'>
				{/* Title of the website */}
				<h3>Yatu African Art</h3>
			</div>
			<div className='sign-link'>
				{/* signing links */}
				<Link to = 'login'>Log in</Link>
				<Link to = 'register'> Register </Link>
			</div>
			{/* the sidebar variable to open and close */}
			{openSlideBar}
		</div>
	);
}

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		height: '10vh',
		width: '100%',
		alignItems: 'center'
	}
};
