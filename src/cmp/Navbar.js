import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../cmp/Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WebChallange
            <i className='fas fa-globe' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}>
                Products
              </Link>
            </li>

            <li>
            </li>
            <li className='nav-item'>
            <Link
                to='/investors'
                className='nav-links'
                onClick={closeMobileMenu}>
                Investors
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contacts'
                className='nav-links'
                onClick={closeMobileMenu}>
                Contacts
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
