import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className = 'footer-container ui stackable'>
            <h3>Yatu Online Gallary<span>.</span></h3>
            <div className = 'footer'>
                <h4>Web Info</h4>
                <a href="#/">About Us</a>
                <a href="#/">Contact Us</a>
                <a href="#/">Privacy Policy</a>
            </div>
            <div className = 'footer'>
                <h4>Find Us On</h4>
                <a href="#/">Facebook</a>
                <a href="#/">Twitter</a>
                <a href="#/">Linked</a>
            </div>
            <h5>Copyright &copy; 2019 Yatu Art.</h5>
        </div>
    )
}

export default Footer
