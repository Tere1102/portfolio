import './../Menu/Menu.css'
import { Link } from 'react-router-dom'
import SocialNetworks from './../Menu/SocialNetworks.jsx'

const Menu = () => {
    return (
        <header className='headerStyles'>
            <span className='logo'>  const teresa = ['she', 'her']</span>
            <nav className='navStyles'>
                <Link to='/'> <span className='initial'>I</span>nicio</Link>
                <Link to='projects'><span className='initial' >P</span>royectos</Link>
                <Link to='aboutme'><span className='initial'>S</span>obre mí</Link>
            </nav>

            <nav className='navMobile'>
                <Link>
                    <img src="#" alt="" />
                </Link>
                <Link>
                    <img src="#" alt="" />
                </Link>
                <Link>
                    <img src="#" alt="" />
                </Link>
            </nav>
            <SocialNetworks />
        </header>
    )
}
export default Menu