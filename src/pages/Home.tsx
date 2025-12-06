import About from '../components/About';
import Culture from '../components/Culture';
import Destinations from '../components/Destinations';
import Hero from '../components/Hero';
import PracticalInfo from '../components/PracticalInfo';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Destinations />
      <Culture />
      <PracticalInfo />
      <Contact />
    </>
  );
}
