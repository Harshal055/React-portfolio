import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Navbar = () => {
    
  return (
    <nav className=" mb-20 flex items-center justify-between py-6"> 
    <div className="flex flex-shrink-0 items-center">
<img className='mx-2 w-10 ' src={logo} alt="logo" />

    </div>
    <div className=" m-8 flex items-center justify-center gap-4  text-2xl">
       <a href="https://www.linkedin.com/in/harshal-pardhi/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>
<a href="https://github.com/Harshal055" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
<a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
  <FaXTwitter  /> {/* Corrected FaXTwitter to FaTwitter */}
</a>
<a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>
    </div>
    </nav>
  )
}

export default Navbar;  




