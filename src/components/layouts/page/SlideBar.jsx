import React from 'react';
import '../../styles/Header.css';

const SlideBar = ({close}) => {
    return (
        <div className = 'slide-bar' >
            <div className = "slide-nav">
                <h3>Choose from the categories</h3>
                <h1 onClick = {close}>&times;</h1>
            </div>
            {/* List of the categories */}
            <a href="#/">Drawings</a>
            <a href="#/">Paintings</a>
            <a href="#/">Sculptures</a>
            <a href="#/">Crafts</a>
            <a href="#/">Photography</a>
            <a href="#/">Jewellery</a>
            <a href="#/">Mixed Media</a>
            <a href="#/">Prints</a>
        </div>
    );
}

export default SlideBar;
