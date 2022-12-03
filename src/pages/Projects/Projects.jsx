import React from 'react'
import { Project } from '../../components/Project/Project'
import { projects } from '../../components/helpers/pojectList'

export const Projects = () => {
   return (
      <div>
         <main className='section'>
            <div className='container'>
               <h2 className='title-1'>Projects</h2>
               <ul className='projects'>
                  {projects.map(project => (
                     <Project key={project.id} {...project} />
                  ))}
               </ul>
            </div>
         </main>
      </div>
   )
}
