import logo from '../../assets/images/home.png'
import { useEffect, useState, useRef } from 'react';
// import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js';
import Aos from 'aos';
import 'aos/dist/aos.css'
function Header() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

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
    // Function to initialize Typed after a delay
    const initializeTyped = () => {
      const typed = new Typed(el.current, {
        strings: ['Full Stack Developer.', 'Mobile Developer.', 'Python Developer.', 'Gamer 🎮.', 'Full Stack Developer.', 'Mobile Developer.', 'Python Developer.', 'Gamer 🎮.','Full Stack Developer.', 'Mobile Developer.', 'Python Developer.', 'Gamer 🎮.','Full Stack Developer.', 'Mobile Developer.', 'Python Developer.', 'Gamer 🎮.', ],
        typeSpeed: 50,
      });
      
      // Destroy Typed instance during cleanup to stop animation
      return () => {
        typed.destroy();
      };
    };

    // Set a timeout to delay the Typed initialization
    const timeoutId = setTimeout(() => {
      initializeTyped();
    }, 1000); // 1000 milliseconds (1 second)

    // Clear the timeout in case the component unmounts before the delay
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <div className="header">
      <a href="#" className="logo">Wisdom Egwim</a>
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
      <div className="home-content" data-aos="fade-down">
        <h3 >Hello, It's Me </h3>
        <h1>Wisdom Egwim</h1>
        <h3>And I'm a <span ref={el} className="typed"></span></h3>
        <p>Recognized for a high level of competence in both web development and mobile development, consistently delivering top-tier work.</p>
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

// I'm a passionate  Full Stack Developer from Nigeria. I have experience in Web Development, Mobile  and software development in general. I have a degree in Information Systems and I am currently studying to become a Full Stack Developer and Cyber Security Expert.

//Meet Wisdom, an ambitious developer with expertise in web, mobile, and software development. Despite lacking a formal degree, his proficiency shines through in the projects he has independently conceived and brought to life, showcasing a determination to excel in the field.