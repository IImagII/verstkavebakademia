import './styles/main.css'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects/Projects'
import { Contacts } from './pages/Contscts/Contacts'
import { ProjectPages } from './pages/ProjectPages/ProjectPages'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'
import ScrollToTop from './utils/scrollToTop'

function App() {
   return (
      <div className='App'>
         <NavBar />
         <ScrollToTop />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/project/:id' element={<ProjectPages />} />
            <Route path='*' element={<PageNotFound />} />
         </Routes>
         <Footer />
      </div>
   )
}

export default App
