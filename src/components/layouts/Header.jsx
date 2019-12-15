import React, { useState } from 'react';
import '../styles/Header.css';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SlideBar from './page/SlideBar';

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
					<FontAwesomeIcon icon={faAlignJustify} size='2x' />
				</menu>
			</div>
			<div className='font-title'>
				{/* Title of the website */}
				<h3>Yatu African Art</h3>
			</div>
			<div className='sign-link'>
				{/* signing links */}
				<a href='/#'>Log in</a>
				<a href='/#'>Register</a>
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
