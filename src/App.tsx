import { useState, useEffect } from 'react';
import './App.css'
import { Preloader, Header, Aboutme, Services, Portfolio, Contact, Footer } from './containers'
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
    {loading ? (<Preloader />) : 
    (
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
  )
}

export default App
