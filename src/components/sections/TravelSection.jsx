import { travelCards } from '../../content/siteContent';
import planeIcon from '../../../assets/travel/to-mumbai.png';
import taxiIcon from '../../../assets/travel/taxi.png';
import trainIcon from '../../../assets/travel/train.png';

const icons = {
  plane: planeIcon,
  taxi: taxiIcon,
  train: trainIcon
};

function withLineBreaks(text) {
  return text
    .split('\n')
    .flatMap((line, i, lines) =>
      i < lines.length - 1 ? [line, <br key={i} />] : [line]
    );
}

function TravelSection() {
  return (
    <section
      className="section-shell travel-section section-ambient-bg"
      id="travel"
    >
      <div className="section-ambient-wash section-ambient-wash--left" aria-hidden="true" />
      <div className="section-ambient-wash section-ambient-wash--right" aria-hidden="true" />
      <div className="section-ambient-mandala" aria-hidden="true" />

      <div className="container">
        <div className="travel-header">
          <h2 className="section-title">Getting There</h2>
          <span className="travel-header__divider" aria-hidden="true" />
        </div>
        <div className="travel-grid">
          {travelCards.map((card) => (
            <article className="travel-card" key={card.id}>
              <span className="travel-card__icon" aria-hidden="true">
                <img src={icons[card.id]} alt="" />
              </span>
              <h3>{card.title}</h3>
              <p>{withLineBreaks(card.copy)}</p>
              <a
                className="travel-card__button"
                href={card.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelSection;
