// CelebrationTimeline.jsx

import sangeetImage from '../../../assets/celebrations/dancing_doll.png';
import weddingImage from '../../../assets/celebrations/chairs.png';
import receptionImage from '../../../assets/celebrations/glassses.png';
import eskayVenueImage from '../../../assets/celebrations/sangeet_location.png';
import saharaVenueImage from '../../../assets/celebrations/sahara_star.png';
import receptionVenueImage from '../../../assets/celebrations/reception.png';
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
    title: "Celebration\nSoirée",
    date: "Saturday, 30th January",
    time: "7:30 PM onwards",
    venue: "Eskay Resorts",
    description:
      "Dinner, laughter, and one\nfinal evening of celebration\nwith our favorite people.",
    celebrationImage: receptionImage,
    venueImage: receptionVenueImage,
    imageAlt: "Two champagne glasses celebrating the reception",
    venueImageAlt: "Illustration of the reception venue",
  },
];

function withLineBreaks(text) {
  return text
    .split("\n")
    .flatMap((line, i, lines) =>
      i < lines.length - 1 ? [line, <br key={i} />] : [line]
    );
}

function OrnamentalDivider() {
  return (
    <div className="ornamental-divider" aria-hidden="true">
      <span />
      <span className="ornamental-divider__diamond">◆</span>
      <span />
    </div>
  );
}

function EventCard({ event }) {
  return (
    <article className="celebration-card">
      <div className="celebration-card__celebration-image-wrapper">
        <div className="celebration-card__arch" aria-hidden="true" />

        <img
          src={event.celebrationImage}
          alt={event.imageAlt}
          className={`celebration-card__celebration-image${
            event.id === 2 ? " celebration-card__celebration-image--large" : ""
          }`}
          loading="lazy"
        />
      </div>

      <div className="celebration-card__content">
        <p className="celebration-card__eyebrow">{event.eyebrow}</p>

        <h3 className="celebration-card__title">
          {withLineBreaks(event.title)}
        </h3>
        <p className="celebration-card__description">
          {withLineBreaks(event.description)}
        </p>

        <OrnamentalDivider />

        <div className="celebration-card__details">
          <p className="celebration-card__venue">{event.venue}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>

        
      </div>

      <div className="celebration-card__venue-image-wrapper">
        <img
          src={event.venueImage}
          alt={event.venueImageAlt}
          className="celebration-card__venue-image"
          loading="lazy"
        />
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

        <div className="celebration-cards">
          {celebrationEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}