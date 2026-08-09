import coupleIllustration from '../../../assets/celebrations/sid_and_me.png';
import heroBackground from '../../../assets/background/background_rect_4.png';

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
