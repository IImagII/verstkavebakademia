import React from 'react'
import { HomeSvgSelector } from '../../pages/HomeSvgSelector/HomeSvgSelector'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
   return (
      <nav className='nav'>
         <div className='container'>
            <div className='nav-row'>
               <a href='./index.html' className='logo'>
                  <strong>Freelancer</strong> portfolio
               </a>

               <button className='dark-mode-btn'>
                  <div className='dark-mode-btn__icon'>
                     <HomeSvgSelector id='sun' />
                  </div>

                  <HomeSvgSelector id='moon' />
               </button>

               <ul className='nav-list'>
                  <li className='nav-list__item'>
                     <Link
                        to='/'
                        className='nav-list__link nav-list__link--active'
                     >
                        Home
                     </Link>
                  </li>

                  <li className='nav-list__item'>
                     <Link to='/projects' className='nav-list__link'>
                        Projects
                     </Link>
                  </li>
                  <li className='nav-list__item'>
                     <Link to='/contacts' className='nav-list__link'>
                        Contacts
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
