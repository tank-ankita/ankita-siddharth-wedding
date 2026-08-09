import placeholderImage from "../../../assets/celebrations/dancing_doll.png";
import "../../../css/Activities.css";

const activities = [
  {
    title: "Heritage Walk",
    description:
      "Step back in time with a walk through South Mumbai’s iconic landmarks.",
    image: placeholderImage,
    alt: "Gateway of India illustration",
  },
  {
    title: "Marine Drive",
    description:
      "Enjoy a sunset stroll along the Queen’s Necklace and soak in the sea breeze.",
    image: placeholderImage,
    alt: "Marine Drive illustration",
  },
  {
    title: "Elephanta Island",
    description:
      "Take a ferry ride to explore the ancient caves and beautiful island views.",
    image: placeholderImage,
    alt: "Elephanta Caves illustration",
  },
  {
    title: "Food Trail",
    description:
      "Indulge in Mumbai’s street food—from vada pav to pav bhaji and more.",
    image: placeholderImage,
    alt: "Mumbai street food illustration",
  },
  {
    title: "Shopping Spree",
    description:
      "Explore local markets for handicrafts, fashion, jewelry, and souvenirs.",
    image: placeholderImage,
    alt: "Indian shopping bags illustration",
  },
  {
    title: "Luxury Staycations",
    description:
      "Relax at world-class hotels with spa days, fine dining, and infinity-pool views.",
    image: placeholderImage,
    alt: "Luxury Mumbai hotel illustration",
  },
  {
    title: "Bollywood Experience",
    description:
      "Live the Mumbai magic with a studio tour or a Bollywood dance class.",
    image: placeholderImage,
    alt: "Bollywood dancing illustration",
  },
  {
    title: "Rooftop Nights",
    description:
      "Unwind at Mumbai’s beautiful rooftop bars with spectacular city views.",
    image: placeholderImage,
    alt: "Mumbai rooftop evening illustration",
  },
];

export default function MumbaiActivities() {
  return (
    <section className="mumbai-activities" id="activities">
      <div className="activities-floral floral-top-left" aria-hidden="true" />
      <div className="activities-floral floral-bottom-right" aria-hidden="true" />



      <div className="activities-panel">
        <header className="activities-heading">
          <p className="activities-eyebrow">Explore Mumbai</p>
          <h2>Things To Do</h2>

          <div className="heading-divider" aria-hidden="true">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="activities-intro">
            Make the most of your time in this vibrant city!
            <br />
            Here are some handpicked experiences to enjoy around the wedding.
          </p>
        </header>

        <div className="activities-grid">
          {activities.map((activity) => (
            <article className="activity-card" key={activity.title}>
              <div className="activity-card-top">
                <span className="activity-motif" aria-hidden="true">
                  ❧
                </span>

                <div className="activity-image-wrap">
                  <img
                    className="activity-image"
                    src={activity.image}
                    alt={activity.alt}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="activity-copy">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="activities-help">
          <span className="help-heart" aria-hidden="true">
            ♥
          </span>

          <p>
            <strong>Need help planning or have questions about any of these?</strong>
            <br />
            We’re here to help! Reach out to us anytime.
          </p>

          <span className="help-ornament" aria-hidden="true">
            ❧
          </span>
        </div>
      </div>
    </section>
  );
}