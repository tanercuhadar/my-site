import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <a href="/" >Portfolio</a>
                </div>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href="#home" className='nav-link'>Giriş</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link'>Hakkımda</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#projects" className='nav-link'>Projeler</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#cv" className='nav-link'>CV&Eğitim</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" className='nav-link'>İletişim</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar