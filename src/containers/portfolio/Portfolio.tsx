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
            <img src={portfolio2} alt="" />
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
            <img src={portfolio3} alt="" />
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
            <img src={portfolio6} alt="" />
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

        </div>

      </div>
    </>
  )
}

export default portfolio
