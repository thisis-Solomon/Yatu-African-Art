import React from 'react';
import '../styles/Header.css';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	return (
		<div style={styles.headerContainer}>
			<div>
				{/* Menu bar here */}
				<menu type='toolbar' onClick={() => console.log('Clicked')}>
					<FontAwesomeIcon icon={faAlignJustify} size='2x' />
				</menu>
			</div>
			<div className = 'font-title'>
				{/* Title of the website */}
				<h3>Yatu African Art</h3>
			</div>
			<div className = 'sign-link'>
				{/* signing links */}
				<a href='/#'>Log in</a>
				<a href='/#'>Register</a>
			</div>
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
