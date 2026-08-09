import { useState } from 'react';
import NavBar from '../components/sections/NavBar';
import HeroSection from '../components/sections/HeroSection';
import StorySection from '../components/sections/StorySection';
import EventsSection from '../components/sections/EventsSection';
import JourneySection from '../components/sections/JourneySection';
import TravelSection from '../components/sections/TravelSection';
import RsvpSection from '../components/sections/RsvpSection';
import FAQSection from '../components/sections/FAQSection';
import FooterSection from '../components/sections/FooterSection';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="paper-texture" aria-hidden="true" />
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <StorySection />
        <EventsSection />
        <JourneySection />
        <TravelSection />
        <RsvpSection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default HomePage;
