import React from 'react'
import { HomeSvgSelector } from '../../pages/HomeSvgSelector/HomeSvgSelector'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
   const activeLink = 'nav-list__link nav-list__link--active'
   const normalLink = 'nav-list__link'

   return (
      <nav className='nav'>
         <div className='container'>
            <div className='nav-row'>
               <NavLink to='/' className='logo'>
                  <strong>Freelancer</strong> portfolio
               </NavLink>

               <button className='dark-mode-btn'>
                  <div className='dark-mode-btn__icon'>
                     <HomeSvgSelector id='sun' />
                  </div>
                  <div className='dark-mode-btn__icon'>
                     <HomeSvgSelector id='moon' />
                  </div>
               </button>

               <ul className='nav-list'>
                  <li className='nav-list__item'>
                     <NavLink
                        to='/'
                        className={({ isActive }) =>
                           isActive ? activeLink : normalLink
                        }
                     >
                        Home
                     </NavLink>
                  </li>

                  <li className='nav-list__item'>
                     <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                           isActive ? activeLink : normalLink
                        }
                     >
                        Projects
                     </NavLink>
                  </li>
                  <li className='nav-list__item'>
                     <NavLink
                        to='/contacts'
                        className={({ isActive }) =>
                           isActive ? activeLink : normalLink
                        }
                     >
                        Contacts
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}
