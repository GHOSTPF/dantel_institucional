import HeroSection from "../components/HeroSection";
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Segments from '../components/Segments';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Features />
      <Solutions />
      <Segments />
      <Pricing />
      <Footer />
    </main>
  );
}
