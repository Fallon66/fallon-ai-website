import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import PainPoints from './components/PainPoints';
import HowWeWork from './components/HowWeWork';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <PainPoints />
      <HowWeWork />
      <Stats />
      <Newsletter />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
