import React from 'react';
import img from '../react-logo.png'

function Header() {
    return (
      <>
        <header>
          <nav className="nav">
            <img src={img} alt="" className="logo"/>
            <ul className="menu">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </>
    )
  }

export default Header 