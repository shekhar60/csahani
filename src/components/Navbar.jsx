import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <h1 className="text-5xl font-sans font-bold">CS</h1>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="http://linkedin.com/in/chandrashekhar-sahani-b2766319a" target="_blank" rel="noopener norefferrer" aria-label="Linkdin">
                <FaLinkedin />
            </a>
            <a href="https://github.com/shekhar60?tab=repositories" target="_blank" rel="noopener norefferrer" aria-label="Github">
                <FaGithub />
            </a>
            <a href="https://www.facebook.com/share/19oTGjJYqA/?mibextid=wwXIfr" target="_blank" rel="noopener norefferrer" aria-label="Facebook">
                <FaFacebook />
            </a>
        </div>
    </nav>
  )
}

export default Navbar