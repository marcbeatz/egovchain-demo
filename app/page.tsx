import HomeSection from '@/components/sections/home';
import Navbar from '../components/common/Navbar';
import AboutSection from '@/components/sections/about';
import BenefitsSection from '@/components/sections/benefits';
import HighlightsSection from '@/components/sections/highlights';
import ContactUsSection from '@/components/sections/contact-us';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='snap-container scrollable-container'>
        <HomeSection />

        <AboutSection />

        <BenefitsSection />

        <HighlightsSection />

        <ContactUsSection />

        <Footer />
      </main>
    </>
  );
}
