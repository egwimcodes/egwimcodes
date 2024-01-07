import Navbar  from "../navbar/Navbar"
import logo from '../../assets/images/home.png'
function Header() {
  return (
    <>
    <div className="header">
      <a href="#" className="logo"> Portfolio</a>
      <i className="bx bx-menu-alt-right" id="menu-icon"></i>
        <Navbar />
    </div>
    <section className="home" id="home">
      <div className="home-content">
        <h3> Hello, It's Me</h3>
        <h1> Wisdom Egwim</h1>
        <h3>And I'm a <span>Full Stack Developer</span></h3>
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

      <div className="home-image">
          <img src={logo} alt=""/>
        </div>

    </section>
    </>
  )
}

export default Header
