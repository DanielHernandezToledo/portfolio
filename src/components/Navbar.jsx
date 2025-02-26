import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/dhlogo.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <a href="/portfolio" aria-label='Home'>
                    <img src={logo} alt="imagen-logo" className='mx-2' width={50} height={33} />
                </a>
            </div>
            <div className="m8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/daniel-hernandez-2b8b6b1b8/" target="_blank" rel="noopener noreferrer" aria-label='Linkedin'><FaLinkedin /></a>
                <a href="https://github.com/DanielHernandezToledo" target="_blank" rel="noopener noreferrer" aria-label='Github'><FaGithub /></a>
                <a href="https://www.instagram.com/daniel.aht93/" target="_blank" rel="noopener noreferrer" aria-label='Instagrm'><FaInstagram /></a>
            </div>
        </div>
    )
}

export default Navbar
