import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <div className='footer-container'>
        <p>
          2024{" "}
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='font-bold'>
            Neeraj Lochan Vinod
          </a>.
        </p>

        <div className='social-links'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:scale-110 transition-transform'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
