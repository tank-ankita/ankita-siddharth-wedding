import "../../../css/Activities.css";

const THINGS_TO_DO_DOC_LINK =
  "https://docs.google.com/document/d/1rTOBU3Lu18B8uULKDzaMH8KCms3GkT9TUGyQCwWLOLI/edit?tab=t.0";
const PLACES_TO_VISIT_DOC_LINK =
  "https://docs.google.com/document/d/1rTOBU3Lu18B8uULKDzaMH8KCms3GkT9TUGyQCwWLOLI/edit?tab=t.bodpcyxsfaxe";
const FOOD_SPOTS_DOC_LINK =
  "https://docs.google.com/document/d/1rTOBU3Lu18B8uULKDzaMH8KCms3GkT9TUGyQCwWLOLI/edit?tab=t.r2eot48uqjes";

const activityCategories = [
  {
    title: "Things To Do",
    description:
      "We couldn't invite you all the way to Mumbai and not share our favourite spots! This city is loud, colourful, delicious, and absolutely unforgettable — much like the wedding itself. Here are a few things we'd love for you to experience while you're here.",
    linkHref: THINGS_TO_DO_DOC_LINK,
  },
  {
    title: "Places To Visit",
    description:
      "Mumbai is a city of contrasts — colonial architecture sits alongside modern skyscrapers, peaceful waterfronts blend into bustling markets, and every neighbourhood tells a different story. These are the spots we think every first-time visitor should have on their list.",
    linkHref: PLACES_TO_VISIT_DOC_LINK,
  },
  {
    title: "Food Spot Recommendations",
    description:
      "Forget the wedding catering — just kidding, don't — but Mumbai's food scene deserves its own celebration. These are the spots we personally swear by, and we'd be offended if you left the city without trying at least a few.",
    linkHref: FOOD_SPOTS_DOC_LINK,
  },
];

function OrnamentalDivider() {
  return (
    <div className="activity-card__divider" aria-hidden="true">
      <span />
      <b>✦</b>
      <span />
    </div>
  );
}

export default function MumbaiActivities() {
  return (
    <section className="mumbai-activities" id="activities">
      <div className="activities-floral floral-top-left" aria-hidden="true" />
      <div className="activities-floral floral-bottom-right" aria-hidden="true" />

      <div className="activities-landmark landmark-left" aria-hidden="true">
      </div>

      <div className="activities-landmark landmark-right" aria-hidden="true">
      </div>

      <div className="activities-panel">
        <header className="activities-heading">
          <p className="activities-eyebrow">Mumbai Guide</p>
          <h2>Explore Mumbai</h2>

          <div className="heading-divider" aria-hidden="true">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="activities-intro">
            Make the most of your time in this vibrant city — here's where to
            go, what to see, and what to eat while you're here.
          </p>
        </header>

        <div className="activities-grid">
          {activityCategories.map((category) => (
            <article className="activity-card" key={category.title}>
              <div className="activity-card__arch-wrap">
                <div className="activity-card__arch" aria-hidden="true" />
                <span className="activity-card__motif" aria-hidden="true">
                  ❧
                </span>
              </div>

              <div className="activity-card__content">
                <h3 className="activity-card__title">{category.title}</h3>

                <OrnamentalDivider />

                <p className="activity-card__description">
                  {category.description}
                </p>

                <a
                  className="activity-card__link"
                  href={category.linkHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  View the full list
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
