import logo from '../../assets/images/home.png'
import { useEffect, useState, useRef } from 'react';
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js';

function Header() {
  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  })
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  const [toggleMenu, setToggleMenu] = useState(false)
  
  const [activeLink, setActiveLink] = useState('active');
  useEffect(() => {
    // Update the active link based on the window location hash
    switch (activeLink) {
      case 'home':
        setActiveLink('home');
        break;
      case 'about':
        setActiveLink('about');
        break;
      case 'services':
        setActiveLink('services');
        break;
      case 'portfolio':
        setActiveLink('portfolio');
        break;
      case 'contact':
        setActiveLink('contact');
        break;
      default:
        setActiveLink('');
        break;
    }
  }, [activeLink]); // Run this effect only once when the component mounts


  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer.', 'Backend Developer.', 'Python Developer.', 'Gamer 🎮.', 'Frontend Developer.', 'Backend Developer.', 'Python Developer.', 'Gamer 🎮.', 'Frontend Developer.', 'Backend Developer.', 'Python Developer.', 'Gamer 🎮.' ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="header">
      <a href="#" className="logo"> Portfolio</a>
      {toggleMenu ? <i className='bx bx-x' onClick={() => (setToggleMenu(false))} id="menu-icon"></i> : <i className='bx bx-menu-alt-right' onClick={() => (setToggleMenu(true))} id="menu-icon"></i>}


      <div className="navbar">
        <a href="#home" className={activeLink === 'home' || activeLink === '' ? 'active' : ''}
         onClick={() => setActiveLink('home')}>
          Home
        </a>
        <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setActiveLink('about')}>
          About
        </a>
        <a href="#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => setActiveLink('services')}>
          Services
        </a>
        <a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => setActiveLink('portfolio')}>
          Portfolio
        </a>
        <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setActiveLink('contact')}>
          Contact
        </a>
      </div>

      <div className="navbar __mobile" id="menu" style={{display: toggleMenu ? 'block' : 'none'}}> 

        <a href="#home" className={activeLink === 'home' || activeLink === '' ? 'active' : ''}
         onClick={() => {setActiveLink('home'); setToggleMenu(false)}}>
          Home
        </a>
        <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => {setActiveLink('about'); setToggleMenu(false)}}>
          About
        </a>
        <a href="#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => {setActiveLink('services'); setToggleMenu(false)}}>
          Services
        </a>
        <a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => {setActiveLink('portfolio'); setToggleMenu(false)}}>
          Portfolio
        </a>
        <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => {setActiveLink('contact'); setToggleMenu(false)}}>
          Contact
        </a>
      </div>

      
    </div>
   
   
    <div className="home section" id="home">
      <div className="home-content">
        <h3> Hello, It's Me</h3>
        <h1> Wisdom Egwim</h1>
        <h3>And I'm a <span ref={el} className="typed"></span></h3>
        <p>High level experience in web design and development knowledge, producing quality work.</p>
        <div className="social-media">
          <a href="#"><i className='bx bxl-github'></i></a>
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>

      <div className="home-image" id='home-image'> 
          <img src={logo} alt="" />
        </div>
    </div>
    </>
  )
}

export default Header
