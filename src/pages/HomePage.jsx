import { useState } from 'react';
import NavBar from '../components/sections/NavBar';
import HeroSection from '../components/sections/HeroSection';
import StorySection from '../components/sections/StorySection';
import EventsSection from '../components/sections/EventsSection';
import JourneySection from '../components/sections/JourneySection';
import TravelSection from '../components/sections/TravelSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import RsvpSection from '../components/sections/RsvpSection';
import FAQSection from '../components/sections/FAQSection';
import FooterSection from '../components/sections/FooterSection';

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="paper-texture" aria-hidden="true" />
      <div className="sparkle-group" aria-hidden="true">
        <div className="sparkler sparkler--left">
          <span className="sparkler__stick" />
          <span className="sparkler__tip" />
        </div>
        <div className="sparkler sparkler--center">
          <span className="sparkler__stick" />
          <span className="sparkler__tip" />
        </div>
        <div className="sparkler sparkler--right">
          <span className="sparkler__stick" />
          <span className="sparkler__tip" />
        </div>
      </div>
      <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <EventsSection />
        <RsvpSection />
        <TravelSection />
        <ActivitiesSection />
        <JourneySection />
        <FAQSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default HomePage;
