import './preloader.css'
import Typed from 'typed.js';
import {useRef, useEffect} from 'react';

function Preloader() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Loading.........'],
        typeSpeed: 50,
        onComplete: (self) => {
          // When the first typing is complete, start typing the second text
          self.destroy(); // Destroy the first Typed instance
  
          // Create a new Typed instance for the second text
          const secondTyped = new Typed(el.current, {
            strings: ['Welcome to Wisdom\'s Portfolio...'],
            typeSpeed: 50,
            onComplete: () => {
              // When the second typing is complete, you can proceed to load the main page
              // For example, you can use React Router to navigate to the main page
              console.log('Typing is complete. Loading main page...');
            },
          });
        },
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
