import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Languages from './components/Languages';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <ParticleField />
      <Hero />
      <About />
      <Features />
      <Timeline />
      <Languages />
      <CTA />
      <Footer />
    </div>
  );
}