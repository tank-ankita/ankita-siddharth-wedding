import { events } from '../../content/siteContent';

function EventsSection() {
  return (
    <section className="section-shell" id="events">
      <div className="container">
        <p className="section-eyebrow">Three days, one story</p>
        <h2 className="section-title">The Celebrations</h2>
        <div className="event-grid">
          {events.map((event, index) => (
            <article className={`event-card ${index === 1 ? 'event-card--accent' : ''}`} key={event.title}>
              <p className="event-card__day">{event.day}</p>
              <h3>{event.title}</h3>
              <p className="event-card__type">{event.type}</p>
              <p>{event.date}</p>
              <p>{event.venue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
