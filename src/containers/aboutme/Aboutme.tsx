import about from '../../assets/images/Wisdom-Egwim-Portfolio.png'
import Resume from '/Wisdom-Egwim-Software-Developer-CV.pdf';


function Aboutme() {
  return (
    <>
      <div className="about section" id="about">
        <div className="about-img">
          <img src={about} alt="" />
        </div>

        <div className="about-content" data-aos="fade-up">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Full Stack Developer</h3>
          <p>Wisdom Egwim is a highly skilled, ambitious Software Developer with a robust background in Web 3, Flutter, ReactNative, ReactJs, NextJS, Python, Django, Javascript, FastApi, Dart, Tailwindcss, and Bootstrap.

            <p> My expertise goes beyond traditional development, offering a deep understanding of machine learning and robotics, allowing me to craft innovative and efficient solutions for a wide range of projects.</p>

          </p>
          <p>
            With over 5 years of experience in software development, I have consistently demonstrated my expertise through the successful conception and execution of innovative projects. My commitment to excellence is reflected in the quality of my work, where I blend efficient coding practices with a forward-thinking approach. I continuously explore the intersection of software development and emerging technologies, ensuring that every project I undertake is both cutting-edge and impactful
          </p>
          <p>
            My commitment to following the latest tech trends showcases my readiness for long-lasting success as a developer
          </p>
          <a className='btn' download="Wisdom Egwim Resum"
            target="_blank"
            rel="noreferrer" href={Resume}>Download CV</a>
        </div>
      </div>
    </>
  )
}

export default Aboutme
