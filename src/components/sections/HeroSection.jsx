import coupleIllustration from '../../../assets/celebrations/sid_and_me.png';
import heroBackground from '../../../assets/background/background form gpt.png';

function HeroSection() {
  return (
    <header
      className="hero section-shell"
      id="top"
      style={{
        backgroundImage: `linear-gradient(110deg, rgba(36, 18, 10, 0.76) 0%, rgba(86, 47, 24, 0.5) 42%, rgba(243, 227, 195, 0.18) 100%), url(${heroBackground})`
      }}
    >
      <div className="container hero__content">
        <div className="hero__text-panel panel">
          <p className="hero__eyebrow">With joy in our hearts</p>
          <h1 className="hero__title">
            Ankita <span>&amp;</span> Siddharth
          </h1>
          <p className="hero__copy">
            Separated by time zones, united by one feeling. 
            <br></br>
            The distance was never the story — this moment is.
          </p>
          <div className="hero__meta">
            <strong>28 — 30 January 2027</strong>
            <span>Mumbai, India</span>
          </div>
        </div>
        <div className="hero__image panel">
          <img src={coupleIllustration} alt="Ankita and Siddharth illustration" />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
