import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';  // Import the Cart component

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="">
            <div className="border-b shadow-md">
                <div className='container mx-auto flex justify-between items-center py-4'>
                    <div className="navbar-logo">
                        <Link to='/'> <img className='w-12' src={mainlogo} alt="Logo" /></Link>
                    </div>
                    <div className="navbar-menu">
                        <ul className="flex">
                            <li className='me-4 font-semibold'><Link to='/' >New</Link></li>
                            <li className='me-4 font-semibold'><Link to='/shoes' >Shoes</Link></li>
                            <li className='me-4 font-semibold'><Link to='/cloth'>Clothes</Link></li>
                            <li className='me-4 font-semibold'><Link to='/glovs' >Gloves</Link></li>
                            <li className='me-4 font-semibold'><Link to='/kitchen'>Kitchen</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-icons flex gap-6">
                        <div><FontAwesomeIcon size='xl' icon={faMagnifyingGlass} /></div>
                        <div onClick={toggleCart} className="cursor-pointer"><FontAwesomeIcon size='xl' icon={faCartShopping} /></div>
                        <div><Link to='/auth'><FontAwesomeIcon size='xl' icon={faUser} /></Link></div>
                    </div>
                </div>
            </div>
            <Cart isOpen={isCartOpen} toggleCart={toggleCart} />  {/* Add the Cart component */}
        </div>
    );
};

export default Navbar;
