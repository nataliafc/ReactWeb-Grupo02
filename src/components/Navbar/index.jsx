import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    const [open, setOpen] = useState(true);

    return (
        <nav className='navbar'>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link' onClick={() => setOpen(false)}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sobre' className='nav-link' onClick={() => setOpen(false)}>
                        Sobre
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contato' className='nav-link' onClick={() => setOpen(false)}>
                        Contato
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/carrinho' className='nav-link' onClick={() => setOpen(false)}>
                        Carrinho
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;