import React from 'react'
import { Button } from '../../components/Button/Button'

import project2Big from '../../img/projects/02-big.jpg'

export const ProjectPages = () => {
   return (
      <main className='section'>
         <div className='container'>
            <div className='project-details'>
               <h1 className='title-1'>Video service</h1>

               <img
                  src={project2Big}
                  alt=''
                  className='project-details__cover'
               />

               <div className='project-details__desc'>
                  <p>Skills: React, Node.js, MongoDB</p>
               </div>

               <Button link='http://github.com' />
            </div>
         </div>
      </main>
   )
}
