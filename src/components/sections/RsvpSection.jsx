function RsvpSection() {
  return (
    <section className="section-shell" id="rsvp">
      <div className="container">
        <div className="rsvp-panel">
          <p className="section-eyebrow" style={{ color: '#e3c889' }}>Kindly respond by 1st December</p>
          <h2 className="section-title" style={{ color: '#fff' }}>RSVP</h2>
          <p className="section-copy" style={{ color: 'rgba(247,235,216,0.9)' }}>
            We can’t wait to celebrate with you. Please let us know which of the celebrations you’ll be joining.
          </p>
          <form>
            <div className="form-row">
              <label htmlFor="name">Full name(s)</label>
              <input id="name" name="name" placeholder="Jane & John Doe" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label>Which celebrations will you attend?</label>
              <div className="checkbox-group">
                <label className="checkbox"><input type="checkbox" name="events" value="Sangeet" /> Sangeet Night · 28 Jan</label>
                <label className="checkbox"><input type="checkbox" name="events" value="Wedding" /> Wedding Ceremony · 29 Jan</label>
                <label className="checkbox"><input type="checkbox" name="events" value="Reception" /> Reception · 30 Jan</label>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="guests">Number of guests</label>
              <input id="guests" name="guests" type="number" min="1" max="10" defaultValue="1" />
            </div>
            <div className="form-row">
              <label htmlFor="diet">Dietary preference</label>
              <select id="diet" name="diet">
                <option>Vegetarian</option>
                <option>Non-vegetarian</option>
                <option>Vegan</option>
                <option>Jain</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">A note for the couple</label>
              <textarea id="message" name="message" rows="3" placeholder="Wishes, questions, dance requests…" />
            </div>
            <button className="submit-btn" type="submit">Send RSVP</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RsvpSection;
