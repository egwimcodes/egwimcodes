import about from '../../assets/images/about.png'
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
        <p>Meet Wisdom, a skilled and talented developer with a passion for web, mobile, and software development. Despite lacking a formal degree, My proficiency shines through in the projects i have independently conceived and brought to life, showcasing a determination to excel in the field. </p>
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
