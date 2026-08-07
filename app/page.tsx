import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Differentials />
      <Process />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
