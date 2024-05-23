import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Porjects from './components/Projects/Projects.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Menu from './components/Menu/Menu.jsx'

function App() {

  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Porjects />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default App
