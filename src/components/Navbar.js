import React, { useState, useEffect } from 'react';
import mainlogo from '../mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import New from './Items/New';
import Shoes from './Items/Shoes';
import Cloth from './Items/Cloth';
import Gloves from './Items/Gloves';
import Kitchen from './Items/Kitchen';
import { Link } from 'react-router-dom';
const Navbar = () => {


    return (
        <div className="">
            <div className=" border-b shadow-md ">
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
                    <div className="navbar-logo flex gap-6">
                        <div><FontAwesomeIcon size='xl' icon={faMagnifyingGlass} /></div>
                        <Link to='/cart'><FontAwesomeIcon size='xl' icon={faCartShopping} /></Link>
                        <div><Link to='auth'><FontAwesomeIcon size='xl' icon={faUser} /></Link></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
