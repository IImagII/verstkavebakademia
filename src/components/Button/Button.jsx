import React from 'react'
import github from './../../img/icons/gitHub-black.svg'
import './Button.css'

export const Button = ({ link }) => {
   return (
      <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
         <img src={github} alt='' />
         GitHub repo
      </a>
   )
}
