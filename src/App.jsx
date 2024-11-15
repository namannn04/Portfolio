import { useState, useEffect } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Preloader from './components/Preloader';

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  // Preloader ko 500ms ke baad hide karenge
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 7700); // Preloader runs for 5.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      {showPreloader ? (
        <Preloader />
      ) : (
        <div className="animate-fadeIn">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default App;
