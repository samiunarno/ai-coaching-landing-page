import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <SuccessStories />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
