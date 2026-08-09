import { useState } from 'react';
import logo from '../../../assets/logo.png';

function RsvpSection() {
  const [attendance, setAttendance] = useState('accepts');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-shell" id="rsvp">
      <div className="container">
        <div className="rsvp-panel">
          <div className="rsvp-header">
            <img src={logo} alt="Wedding logo" className="rsvp-logo" />
            <p className="section-eyebrow" style={{ color: '#e3c889' }}>Kindly respond by 1st December</p>
            <h2 className="section-title rsvp-title">RSVP</h2>
          </div>
          <div className="rsvp-intro">
            <p className="section-copy" style={{ color: 'rgba(247,235,216,0.9)' }}>
              Three days, one big celebration. We would be honoured to have you with us for all of it. Please share your response below so we can plan the celebrations with love.
            </p>
            <div className="rsvp-divider" />
          </div>
          <form action="https://formspree.io/f/your-form-id" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" placeholder="Jane & John Doe" required />
            </div>

            <div className="form-row">
              <label>Will you be attending the wedding?</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="accepts"
                    checked={attendance === 'accepts'}
                    onChange={(event) => setAttendance(event.target.value)}
                  />
                  Joyfully accepts
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="declines"
                    checked={attendance === 'declines'}
                    onChange={(event) => setAttendance(event.target.value)}
                  />
                  Regretfully declines
                </label>
              </div>
            </div>

            {attendance === 'declines' ? (
              <p className="decline-note">
                We’re so sorry you can’t make it. You’ll be missed. Thanks for letting us know. If anything changes, feel free to reach out. We’d love to have you if you can make it after all.
              </p>
            ) : (
              <div className="nested-form">
                <div className="form-row">
                  <label>Which celebrations will you attend?</label>
                  <div className="checkbox-group">
                    <label className="checkbox"><input type="checkbox" name="events" value="Sangeet Night · 28 January" /> Sangeet Night · 28 January</label>
                    <label className="checkbox"><input type="checkbox" name="events" value="Wedding Ceremony · 29 January" /> Wedding Ceremony · 29 January</label>
                    <label className="checkbox"><input type="checkbox" name="events" value="Reception · 30 January" /> Reception · 30 January</label>
                  </div>
                </div>

                <div className="form-row">
                  <label>If arriving from outside Mumbai, will you require accommodation?</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="accommodation" value="yes" /> Yes
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="accommodation" value="no" /> No
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <label>Will you require airport or station pickup?</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="pickup" value="yes" /> Yes
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="pickup" value="no" /> No
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="dietary">Any dietary preferences?</label>
                  <textarea id="dietary" name="dietary" rows="3" placeholder="Please share any preferences or allergies here." />
                </div>

                <div className="form-row">
                  <label>Are you coming with a +1?</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="plusOne" value="yes" /> Yes
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="plusOne" value="no" /> No
                    </label>
                  </div>
                </div>
              </div>
            )}

            <button className="submit-btn" type="submit">Submit RSVP</button>
            {submitted && <p className="form-success">Thank you for your RSVP. We’ve received your response.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default RsvpSection;
