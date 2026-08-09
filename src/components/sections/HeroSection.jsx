import coupleIllustration from '../../../assets/celebrations/sid_and_me.png';
import heroBackground from '../../../assets/background/bg_5.png';
import circularLantern from '../../../assets/charms/circular_lantern.png';
import rectangleLantern from '../../../assets/charms/long rectangle lantern.png';
import lotusLantern from '../../../assets/charms/lotus.png';
import ovalLantern from '../../../assets/charms/oval.png';
import longOvalLantern from '../../../assets/charms/long_oval.png';
import longRectangleLantern from '../../../assets/charms/long_rectangle.png';
import longRedLantern from '../../../assets/charms/long_red.png';

const heroLanternsLeft = [
  { src: ovalLantern, height: 'clamp(105px, 11vw, 165px)', delay: '0.2s', duration: '4s' },
  { src: longRedLantern, height: 'clamp(175px, 18vw, 260px)', delay: '0.6s', duration: '4.6s' },
  { src: lotusLantern, height: 'clamp(120px, 13vw, 180px)', delay: '0s', duration: '3.8s' },
  { src: longOvalLantern, height: 'clamp(165px, 17vw, 250px)', delay: '0.9s', duration: '4.4s' },
];

const heroLanternsRight = [
  { src: circularLantern, height: 'clamp(110px, 12vw, 175px)', delay: '0.4s', duration: '4.2s' },
  { src: longRectangleLantern, height: 'clamp(170px, 17vw, 255px)', delay: '0.1s', duration: '4s' },
  { src: rectangleLantern, height: 'clamp(130px, 14vw, 190px)', delay: '0.7s', duration: '4.8s' },
];

function TypedText({ text, startDelay, charStep, wordClassName }) {
  const chunks = text.trim().split(/(\s+)/);
  const chars = [];

  chunks.forEach((chunk, ci) => {
    if (/^\s+$/.test(chunk)) {
      chars.push({ key: `sp-${ci}`, char: " ", isSpace: true });
      return;
    }
    [...chunk].forEach((char, j) => {
      chars.push({
        key: `c-${ci}-${j}`,
        char,
        isSpace: false,
        className: wordClassName ? wordClassName(chunk) : "",
      });
    });
  });

  const caretDelay = startDelay + chars.length * charStep + 0.1;

  return (
    <>
      {chars.map((c, i) =>
        c.isSpace ? (
          <span key={c.key}> </span>
        ) : (
          <span
            key={c.key}
            className={`hero__char${c.className ? ` ${c.className}` : ""}`}
            style={{ animationDelay: `${startDelay + i * charStep}s` }}
          >
            {c.char}
          </span>
        )
      )}
      <span className="hero__caret" style={{ animationDelay: `${caretDelay}s` }} />
    </>
  );
}

function HeroSection() {
  return (
    <header
      className="hero section-shell"
      id="top"
      style={{
        '--hero-bg-image': `url(${heroBackground})`
      }}
    >
      <div className="hero__lanterns" aria-hidden="true">
        <div className="hero__lantern-cluster hero__lantern-cluster--left">
          {heroLanternsLeft.map((lantern, i) => (
            <img
              key={i}
              src={lantern.src}
              alt=""
              className="hero__lantern"
              style={{
                height: lantern.height,
                animationDelay: lantern.delay,
                animationDuration: lantern.duration,
              }}
            />
          ))}
        </div>

        <div className="hero__lantern-cluster hero__lantern-cluster--right">
          {heroLanternsRight.map((lantern, i) => (
            <img
              key={i}
              src={lantern.src}
              alt=""
              className="hero__lantern"
              style={{
                height: lantern.height,
                animationDelay: lantern.delay,
                animationDuration: lantern.duration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">With joy in our hearts</p>
          <h1 className="hero__title">
            <TypedText
              text="Ankita & Siddharth"
              startDelay={0.3}
              charStep={0.045}
              wordClassName={(word) => (word === "&" ? "hero__title-amp" : "")}
            />
          </h1>
          <p className="hero__copy">
            <TypedText
              text="invite you to their wedding"
              startDelay={2.2}
              charStep={0.035}
            />
          </p>
          <div className="hero__meta">
            <strong>
              28<sup>th</sup> — 30<sup>th</sup> January 2027
            </strong>
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
