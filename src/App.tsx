import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Configurations from './components/Configurations';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Developer from './components/Developer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Configurations />
      <Gallery />
      <Location />
      <Developer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
