import Hero from '../components/Hero';
import Services from '../components/Services';
import PainPoints from '../components/PainPoints';
import HowWeWork from '../components/HowWeWork';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PainPoints />
      <HowWeWork />
      <Newsletter />
      <FAQ />
      <FinalCTA />
    </>
  );
}
