import { useState, useEffect } from 'react';
import './App.css';
import { Preloader, Header, Aboutme, Services, Portfolio, Contact, Footer } from './containers';
import { Helmet } from 'react-helmet';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate an asynchronous operation (e.g., fetching data)
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 6000));

      // Once data is loaded, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Wisdom Egwim",
              "url": "https://egwimcodes.dev",
              "image": "https://egwimcodes.dev/Wisdom-Egwim.png",
              "sameAs": [
                "https://twitter.com/egwimcodes",
                "https://www.linkedin.com/in/egwimcodes",
                "https://github.com/egwimcodes",
                "https://www.facebook.com/egwimcodes"
              ],
              "jobTitle": "Software Developer | Web Developer | Mobile Developer | ML & Robotics Enthusiast",
              "worksFor": {
                "@type": "Organizations | Company | Small & Large Enterprise",
                "name": "Wisdom Egwim"
              }
            }
          `}
        </script>
      </Helmet>

      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Aboutme />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
