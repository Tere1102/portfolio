import LinkedIn from './../../assets/LinkedIn.svg'
import GitHub from './../../assets/github.svg'
import Instagram from './../../assets/Instagram.svg'
import './../Menu/SocialNetworks.css'
import { Link } from 'react-router-dom'


const SocialNetworks = () => {
    return (
        <div className='socialNetworks'>
            <Link to="https://www.linkedin.com/in/teresa-arranz-carrasco/" alt="LinkedIn" target="blank">
                <img width={25} src={LinkedIn} alt="LinkedInLogo" />
            </Link>
            <Link to="https://github.com/Tere1102" alt="GitHub" target="blank">
                <img width={25} src={GitHub} alt="GitHubLogo" />
            </Link>
            <Link to="https://www.instagram.com/tere.esea/" alt="Instagram" target="blank">
                <img width={25} src={Instagram} alt="instagramLogo" />
            </Link>


        </div>
    )
}

export default SocialNetworks