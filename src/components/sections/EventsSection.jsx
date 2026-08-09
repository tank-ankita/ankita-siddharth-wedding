// CelebrationTimeline.jsx

import sangeetImage from '../../../assets/celebrations/01_sangeet_dancers.png';
import weddingImage from '../../../assets/celebrations/02_wedding_mandap.png';
import receptionImage from '../../../assets/celebrations/03_reception_glasses.png';
import eskayVenueImage from '../../../assets/celebrations/04_eskay_resort.png';
import saharaVenueImage from '../../../assets/celebrations/05_sahara_star.png';
import receptionVenueImage from '../../../assets/celebrations/06_reception_venue.png';
import '../../../css/celebration.css';

const celebrationEvents = [
  {
    id: 1,
    eyebrow: "Sangeet Night",
    title: "Beats, Bangles & Bollywood",
    date: "Thursday, 28th January",
    time: "7:00 PM onwards",
    venue: "Eskay Resorts",
    description:
      "An evening of music, dance, performances, and Bollywood celebrations.",
    celebrationImage: sangeetImage,
    venueImage: eskayVenueImage,
    imageAlt: "Traditional Indian dancers celebrating the Sangeet",
    venueImageAlt: "Illustration of Eskay Resorts",
  },
  {
    id: 2,
    eyebrow: "Wedding Ceremony",
    title: "Together, Under the Mandap",
    date: "Friday, 29th January",
    time: "4:00 PM onwards",
    venue: "Sahara Star, Mumbai",
    description:
      "Join us as two families come together and Ankita and Siddharth begin their forever.",
    celebrationImage: weddingImage,
    venueImage: saharaVenueImage,
    imageAlt: "Indian wedding mandap illustration",
    venueImageAlt: "Illustration of Sahara Star in Mumbai",
  },
  {
    id: 3,
    eyebrow: "Reception",
    title: "Celebration Soirée",
    date: "Saturday, 30th January",
    time: "7:30 PM onwards",
    venue: "Eskay Resorts",
    description:
      "Dinner, laughter, and one final evening of celebration with our favorite people.",
    celebrationImage: receptionImage,
    venueImage: receptionVenueImage,
    imageAlt: "Two champagne glasses celebrating the reception",
    venueImageAlt: "Illustration of the reception venue",
  },
];

function OrnamentalDivider() {
  return (
    <div className="ornamental-divider" aria-hidden="true">
      <span />
      <span className="ornamental-divider__diamond">◆</span>
      <span />
    </div>
  );
}

function TimelineEvent({ event, index }) {
  return (
    <article
      className={`timeline-event ${
        index % 2 === 0 ? "timeline-event--left" : "timeline-event--right"
      }`}
    >
      <div className="timeline-event__marker" aria-hidden="true">
        <span>{index + 1}</span>
      </div>

      <div className="timeline-event__card">
        <div className="timeline-event__celebration-image-wrapper">
          <div className="timeline-event__arch" aria-hidden="true" />

          <img
            src={event.celebrationImage}
            alt={event.imageAlt}
            className="timeline-event__celebration-image"
            loading="lazy"
          />
        </div>

        <div className="timeline-event__content">
          <p className="timeline-event__eyebrow">{event.eyebrow}</p>

          <h3 className="timeline-event__title">{event.title}</h3>

          <OrnamentalDivider />

          <div className="timeline-event__details">
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p className="timeline-event__venue">{event.venue}</p>
          </div>

          <p className="timeline-event__description">{event.description}</p>

          <div className="timeline-event__venue-image-wrapper">
            <img
              src={event.venueImage}
              alt={event.venueImageAlt}
              className="timeline-event__venue-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EventsSection() {
  return (
    <section className="celebration-section" id="celebrations">
      <div className="celebration-section__ornament celebration-section__ornament--left" />
      <div className="celebration-section__ornament celebration-section__ornament--right" />

      <div className="celebration-section__container">
        <header className="celebration-section__header">
          <p className="celebration-section__kicker">The Wedding Celebrations</p>

          <h2>A Celebration Across Three Beautiful Days</h2>

          <p className="celebration-section__introduction">
            From two different corners of the world, two families waited for
            this moment. Now it is finally here, and we would love for you to
            share it with us.
          </p>

          <OrnamentalDivider />

          <p className="celebration-section__story">
            Their story was written through late-night calls, airport reunions,
            and a love that needed no time zone. Now, Ankita and Siddharth come
            home to Mumbai, where their families grew roots and where two
            worlds will beautifully become one.
          </p>
        </header>

        <div className="celebration-timeline">
          <div className="celebration-timeline__line" aria-hidden="true" />

          {celebrationEvents.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}