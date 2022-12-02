import './styles/main.css'
import { Header } from './components/Header/Header'
import sun from './img/icons/sun.svg'
import moon from './img/icons/moon.svg'
import { Footer } from './components/Footer/Footer'

function App() {
   return (
      <div className='App'>
         <nav className='nav'>
            <div className='container'>
               <div className='nav-row'>
                  <a href='./index.html' className='logo'>
                     <strong>Freelancer</strong> portfolio
                  </a>

                  <button className='dark-mode-btn'>
                     <img
                        src={sun}
                        alt='Light mode'
                        className='dark-mode-btn__icon'
                     />
                     <img
                        src={moon}
                        alt='Dark mode'
                        className='dark-mode-btn__icon'
                     />
                  </button>

                  <ul className='nav-list'>
                     <li className='nav-list__item'>
                        <a
                           href='./index.html'
                           className='nav-list__link nav-list__link--active'
                        >
                           Home
                        </a>
                     </li>
                     <li className='nav-list__item'>
                        <a href='./projects.html' className='nav-list__link'>
                           Projects
                        </a>
                     </li>
                     <li className='nav-list__item'>
                        <a href='./contacts.html' className='nav-list__link'>
                           Contacts
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         <Header />
         <main className='section'>
            <div className='container'>
               <ul className='content-list'>
                  <li className='content-list__item'>
                     <h2 className='title-2'>Frontend</h2>
                     <p>
                        JavaScript, TypeScript, ReactJS, Angular, Redux, HTML,
                        CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS,
                        StyledComponents
                     </p>
                  </li>
                  <li className='content-list__item'>
                     <h2 className='title-2'>Backend</h2>
                     <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                  </li>
               </ul>
            </div>
         </main>
         <Footer />
      </div>
   )
}

export default App
