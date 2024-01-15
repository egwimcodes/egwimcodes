import about from '../../assets/images/Wisdom Egwim About.png'
function Aboutme() {
  return (
    <>
    <div className="about section" id="about">
      <div className="about-img">
        <img src={about} alt=""/>
      </div>
      
      <div className="about-content" data-aos="fade-up">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Full Stack Developer</h3>
        <p>Wisdom Egwim is a highly skilled, ambitious Software Developer with a robust background in Python, Django, FastApi, Flutter, Dart, Javascript, ReactJS, NextJS, Css, Tailwindcss, and Bootstrap.

         My expertise extends beyond conventional boundaries, encompassing a profound understanding of ML and Robotics.

        </p>
        <p>
        With over 4 years of experience in software development, my proficiency shines through in the projects I have independently conceived and brought to life, showcasing a determination to excel in the field. Wisdom not only excels in crafting efficient code but also explores the intersection of software development with cutting-edge technologies, ensuring a forward-thinking approach to every endeavor. 
        </p>
        <p>
        My commitment to following the latest tech trends showcases my readiness for long-lasting success as a developer
        </p>
        <a href="#" className="btn">Download CV</a>
      </div>
    </div>
    </>
    )
}

export default Aboutme
