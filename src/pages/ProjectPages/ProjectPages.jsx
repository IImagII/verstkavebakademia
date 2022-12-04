import React from 'react'
import { Button } from '../../components/Button/Button'
import { projects } from '../../components/helpers/pojectList'
import { useParams } from 'react-router-dom'

export const ProjectPages = () => {
   const { id } = useParams()
   const project = projects[id - 1]

   return (
      <main className='section'>
         <div className='container'>
            <div className='project-details'>
               <h1 className='title-1'>{project.title}</h1>
               <img
                  src={project.imgBig}
                  alt=''
                  className='project-details__cover'
               />
               <div className='project-details__desc'>
                  <p>{project.skills}</p>
               </div>
               {project.gitHubLink && <Button link='http://github.com' />}
            </div>
         </div>
      </main>
   )
}
