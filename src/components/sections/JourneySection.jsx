import journeyArtwork from '../../../assets/journey-savethedate.jpg';

function JourneySection() {
  return (
    <section className="section-shell" id="journey">
      <div className="container">
        <p className="section-eyebrow">Two cities, one story</p>
        <h2 className="section-title">The Journey So Far</h2>
        <div className="journey__layout">
          <div className="journey__card panel">
            <p className="section-copy">
              A chance meeting across a twelve-hour time difference. Years of good-morning texts that were really good-night texts. Now, Chicago and Mumbai finally meet in the middle — for a wedding.
            </p>
            <div className="journey__route">
              <div className="journey__city">
                <strong>Chicago</strong>
                <span>Where it began</span>
              </div>
              <div className="journey__line" />
              <div className="journey__city">
                <strong>Mumbai</strong>
                <span>Where it’s happening</span>
              </div>
            </div>
          </div>
          <div className="journey__frame panel">
            <img src={journeyArtwork} alt="Save the date artwork featuring Chicago and Mumbai" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
