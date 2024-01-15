import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6 } from "../../assets/images"
function portfolio() {
  return (
    <>
      <div className="portfolio section" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={portfolio1} alt="" />
            <div className="portfolio-layer">
              <h4>Dyingearth</h4>
              <p>
                Soil monitoring python (Django app), Insight into soil health.
              </p>
              <a href="https://dying-earth.vercel.app">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>

          </div>

          <div className="portfolio-box">
            <img src={portfolio2} alt="" />
            <div className="portfolio-layer">
              <h4>React Portfolio</h4>
              <p>
                React Portfolio site, Cool animations and responsive design.
              </p>
              <a href="https://egwimcodes.netlify.app">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={portfolio3} alt="" />
            <div className="portfolio-layer">
              <h4>GPT 4</h4>
              <p>
                React GPT 4 site, Cool design and responsive design.
              </p>
              <a href="https://gpt4landing.netlify.app">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>

          </div>

          <div className="portfolio-box">
            <img src={portfolio4} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                High level experience in web design and development knowledge, producing quality work.
              </p>
              <a href="#">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>

          </div>

          <div className="portfolio-box">
            <img src={portfolio5} alt="" />
            <div className="portfolio-layer">
              <h4>Portfolio Site</h4>
              <p>
                Plain HTML, CSS and JS, profesional portfolio site, fully responsive.
              </p>
              <a href="https://snowwisdom.netlify.app">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>

          </div>

          <div className="portfolio-box">
            <img src={portfolio6} alt="" />
            <div className="portfolio-layer">
              <h4>Wordpress Blog</h4>
              <p>
                Wordpress Blog, High level experience in web development, producing quality work.
              </p>
              <a href="https://snowblogger.com">
                <i className="bx bx-link bx-link-external"></i>
              </a>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default portfolio
