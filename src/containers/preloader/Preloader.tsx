import './preloader.css'
import Typed from 'typed.js';
import {useRef, useEffect} from 'react';

function Preloader() {


    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Loading.........'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return (
    <>
    <div className="preloader">
    <div className="hexagon" aria-label="Animated hexagonal ripples">
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
	<div className="hexagon__group">
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
		<div className="hexagon__sector"></div>
	</div>
</div>
<p aria-label="Loading" > <span ref={el}></span></p>
    </div>
    </>
  )
}

export default Preloader
