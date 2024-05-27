import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart'; // Import the Cart component

const Navbar = ({ toggleCart, isCartOpen }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <div className="border-b shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="navbar-logo">
                        <Link to='/'>
                            <img className='w-12' src={mainlogo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="navbar-icons flex gap-6 lg:hidden">
                            <div><FontAwesomeIcon size='xl' icon={faMagnifyingGlass} /></div>
                            <div onClick={toggleCart} className="cursor-pointer">
                                <FontAwesomeIcon size='xl' icon={faCartShopping} />
                            </div>
                            <div>
                                <Link to={isAuthenticated ? '/dashboard' : '/signin'}>
                                    <FontAwesomeIcon size='xl' icon={faUser} />
                                </Link>
                            </div>
                        </div>
                        <button className="lg:hidden ml-4" onClick={toggleMobileMenu}>
                            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="xl" />
                        </button>
                    </div>
                    <div className="navbar-icons hidden lg:flex gap-6">
                        <div><FontAwesomeIcon size='xl' icon={faMagnifyingGlass} /></div>
                        <div onClick={toggleCart} className="cursor-pointer">
                            <FontAwesomeIcon size='xl' icon={faCartShopping} />
                        </div>
                        <div>
                            <Link to={isAuthenticated ? '/dashboard' : '/signin'}>
                                <FontAwesomeIcon size='xl' icon={faUser} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center lg:hidden">
                    <button className="absolute top-4 right-4 text-white" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                    <ul className="flex flex-col items-center space-y-6">
                        <li className='text-white text-xl font-semibold'><Link to='/' onClick={toggleMobileMenu}>New</Link></li>
                        <li className='text-white text-xl font-semibold'><Link to='/shoes' onClick={toggleMobileMenu}>Shoes</Link></li>
                        <li className='text-white text-xl font-semibold'><Link to='/cloth' onClick={toggleMobileMenu}>Clothes</Link></li>
                        <li className='text-white text-xl font-semibold'><Link to='/gloves' onClick={toggleMobileMenu}>Gloves</Link></li>
                        <li className='text-white text-xl font-semibold'><Link to='/kitchen' onClick={toggleMobileMenu}>Kitchen</Link></li>
                    </ul>
                </div>
            )}
            <Cart isOpen={isCartOpen} toggleCart={toggleCart} /> {/* Add the Cart component */}
        </div>
    );
};

export default Navbar;
