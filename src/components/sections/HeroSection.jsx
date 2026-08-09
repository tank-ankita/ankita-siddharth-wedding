import { useEffect, useState } from 'react';
import coupleIllustration from '../../../assets/celebrations/sid_and_me.png';
import heroBackground from '../../../assets/background/background_mumbai.png';

const WEDDING_DATE = new Date(2027, 0, 28, 0, 0, 0);

function getTimeLeft(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown({ target }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="hero__countdown" role="timer" aria-label="Countdown to the wedding">
      {units.map((unit) => (
        <div className="hero__countdown-unit" key={unit.label}>
          <span className="hero__countdown-value">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="hero__countdown-label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

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
        backgroundImage: `url(${heroBackground})`
      }}
    >
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
            <strong>28 — 30 January 2027</strong>
            <span>Mumbai, India</span>
            <Countdown target={WEDDING_DATE} />
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
