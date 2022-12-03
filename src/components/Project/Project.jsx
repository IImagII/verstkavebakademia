import './Project.css'
export const Project = project => {
   console.log('object :>> ', project)
   return (
      <li className='project'>
         <a href='./project-page.html'>
            <img
               src={project.img}
               alt={project.title}
               className='project__img'
            />
            <h3 className='project__title'>{project.title}</h3>
         </a>
      </li>
   )
}
