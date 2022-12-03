import './styles/main.css'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects/Projects'
import { Contacts } from './pages/Contscts/Contacts'
import { Project } from './components/Project/Project'

function App() {
   return (
      <div className='App'>
         <NavBar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contacts' element={<Contacts />} />
         </Routes>

         <Footer />
      </div>
   )
}

export default App
