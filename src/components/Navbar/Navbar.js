import React from 'react'
import './Navbar.scss'
import {NavLink} from 'react-router-dom'

import LogoKasaNavbar from './LogoKasaNavbar/LogoKasaNavbar'

export default function Navbar() {
  return (
    <div className='navbar'>
        <LogoKasaNavbar/>
        <nav>
            <ul className='navbar--list'>
                <li>
                  <NavLink
                  to={'/'}
                  className={({ isActive }) => isActive ? "activeLinkNavbar" : ""}
                  >Accueil
                  </NavLink></li>
                <li>
                  <NavLink
                  to={'/A-Propos'}
                  className={({ isActive }) => isActive ? "activeLinkNavbar" : ""}

                  >A Propos
                  </NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
