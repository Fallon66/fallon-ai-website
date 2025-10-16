import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import PainPoints from './components/PainPoints';
import HowWeWork from './components/HowWeWork';
import Stats from './components/Stats';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <PainPoints />
      <HowWeWork />
      <Stats />
      <FinalCTA />
    </div>
  );
}

export default App;
