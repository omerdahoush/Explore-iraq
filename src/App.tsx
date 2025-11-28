import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Gallery from './components/Gallery';
import Culture from './components/Culture';
import PracticalInfo from './components/PracticalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="destinations">
        <Destinations />
      </div>
      <Gallery />
      <div id="culture">
        <Culture />
      </div>
      <div id="travel">
        <PracticalInfo />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
