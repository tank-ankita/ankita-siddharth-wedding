import { activityCards } from '../../content/siteContent';

function ActivitiesSection() {
  return (
    <section className="section-shell section-ambient-bg" id="activities">
      <div className="section-ambient-wash section-ambient-wash--left" aria-hidden="true" />
      <div className="section-ambient-wash section-ambient-wash--right" aria-hidden="true" />
      <div className="section-ambient-mandala" aria-hidden="true" />

      <div className="container">
        <p className="section-eyebrow">While you're in town</p>
        <h2 className="section-title">Activities &amp; Things to Do</h2>
        <p className="section-copy">
          A few of our favourite Mumbai spots, in case you have time to explore between celebrations.
        </p>
        <div className="travel-grid">
          {activityCards.map((card) => (
            <article className="travel-card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="travel-card__tag">{card.tag}</p>
              <p>{card.copy}</p>
              {card.mapUrl && <a href={card.mapUrl}>View on map →</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
