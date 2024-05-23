import './../Menu/Menu.css'
import { Link } from 'react-router-dom'
import SocialNetworks from './../Menu/SocialNetworks.jsx'
import coding from './../../assets/coding.png'
import Animation1 from './../../assets/Animation1.gif'

const Menu = () => {
    return (
        <header className='headerStyles'>
            <span className='logo'> <img src={coding} alt="Logo" /></span>
            <nav className='navStyles'>
                <Link to='/'> <span className='initial'>I</span>nicio</Link>
                <Link to='projects'><span className='initial' >P</span>royectos</Link>
                <Link to='aboutme'><span className='initial'>S</span>obre mí</Link>
            </nav>
            <SocialNetworks />
        </header>
    )
}
export default Menu