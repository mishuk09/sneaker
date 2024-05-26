import React from 'react';
import mainlogo from '../mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-gray-800 mt-10 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">

                    <img className='w-12' src={mainlogo} alt="Logo" />

                </div>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul>
                        <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
                        <li className="mb-1"><a href="#" className="hover:underline">New Arrivals</a></li>
                        <li className="mb-1"><a href="#" className="hover:underline">Shop</a></li>
                    </ul>
                </div>
                <div className='flex gap-4'>
                <FontAwesomeIcon size='xl' icon={faFacebook} />
                <FontAwesomeIcon size='xl' icon={faInstagram} />
                <FontAwesomeIcon size='xl' icon={faTwitter} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
