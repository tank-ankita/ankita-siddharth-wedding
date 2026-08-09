import { travelCards } from '../../content/siteContent';

function TravelSection() {
  return (
    <section className="section-shell" id="travel">
      <div className="container">
        <p className="section-eyebrow">For our travelling guests</p>
        <h2 className="section-title">Travel &amp; Stay</h2>
        <div className="travel-grid">
          {travelCards.map((card) => (
            <article className="travel-card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="travel-card__tag">{card.tag}</p>
              <p>{card.copy}</p>
              <a href={card.mapUrl}>{card.title === 'Flying in from abroad?' ? 'Let us know your dates →' : 'View on map →'}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelSection;
