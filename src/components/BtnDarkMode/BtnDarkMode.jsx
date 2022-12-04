import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { HomeSvgSelector } from '../../pages/HomeSvgSelector/HomeSvgSelector'
import { useLocalStorage } from '../../utils/useLocalSorage'
import { detectDarkMode } from '../../utils/detectDarkMode'
import './BtnDarkMode.css'

export const BtnDarkMode = () => {
   const btnRef = useRef(null)
   const [darkMode, setDarkMode] = useLocalStorage(
      'keyNameInLocalStorage',
      detectDarkMode() //Проверка темной темы в localStorage
   )
   useEffect(() => {
      //меняет тему и активный класс кнопки
      if (darkMode === 'dark') {
         document.body.classList.add('dark')
         btnRef.current.classList.add('dark-mode-btn--active')
      } else {
         document.body.classList.remove('dark')
         btnRef.current.classList.remove('dark-mode-btn--active')
      }
   }, [darkMode])

   useEffect(() => {
      // Если меняются системные настройки, меняем тему
      window
         .matchMedia('(prefers-color-scheme: dark)')
         .addEventListener('change', event => {
            const newColorScheme = event.matches ? 'dark' : 'light'
            setDarkMode(newColorScheme)
         })
   }, [])

   const handleDarkMode = () => {
      setDarkMode(currentValue => {
         return currentValue === 'light' ? 'dark' : 'light'
      })
   }
   return (
      <button ref={btnRef} className='dark-mode-btn' onClick={handleDarkMode}>
         <div className='dark-mode-btn__icon'>
            <HomeSvgSelector id='sun' />
         </div>
         <div className='dark-mode-btn__icon'>
            <HomeSvgSelector id='moon' />
         </div>
      </button>
   )
}
