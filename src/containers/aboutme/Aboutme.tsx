import about from '../../assets/images/about.png'
function Aboutme() {
  return (
    <>
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt=""/>
      </div>
      
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Full Stack Developer</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quam deleniti harum, mollitia quasi obcaecati, quaerat id quod tempore fugiat exercitationem animi est placeat necessitatibus in vel similique pariatur cumque!
        Magnam, maiores minima! Est incidunt accusamus doloremque, mollitia qui voluptatem reprehenderit dolore doloribus dolorum nobis labore ipsum magni quo nisi, sed assumenda sit saepe voluptatibus delectus soluta amet ea! Velit.</p>
        <a href="#" className="btn">Download CV</a>
      </div>
    </section>
    </>
    )
}

export default Aboutme
