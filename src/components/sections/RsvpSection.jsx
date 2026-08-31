import { useState } from "react";
import '../../../css/RSVPSection.css';

const celebrationOptions = [
  { id: "sangeet", label: "Sangeet Night", date: "Thursday, 28th January" },
  { id: "wedding", label: "Wedding Ceremony", date: "Friday, 29th January" },
  { id: "reception", label: "Reception Soirée", date: "Saturday, 30th January" },
];

const initialForm = {
  fullName: "",
  email: "",
  attendance: "accepts",
  guestCount: "1",
  celebrations: ["sangeet", "wedding", "reception"],
  arrivalDate: "",
  accommodation: "no",
  airportPickup: "no",
  dietaryNotes: "",
};

const RSVP_ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT;

export default function RSVPSection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCelebrationChange = (event) => {
    const { value, checked } = event.target;

    setFormData((current) => ({
      ...current,
      celebrations: checked
        ? [...current.celebrations, value]
        : current.celebrations.filter((id) => id !== value),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!RSVP_ENDPOINT) {
      console.warn(
        "VITE_RSVP_ENDPOINT is not set — RSVP was not sent anywhere. See google-apps-script/rsvp-endpoint.gs for setup."
      );
      console.log("RSVP submission:", formData);
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    setSubmitError(false);

    try {
      // Apps Script web apps don't return CORS headers, so the response
      // is opaque; a resolved fetch just means the request went out.
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-section__wash rsvp-section__wash--left" />
      <div className="rsvp-section__wash rsvp-section__wash--right" />
      <div className="rsvp-section__mandala" />

      <div className="rsvp-section__inner">
        <header className="rsvp-section__intro">
          <p className="rsvp-section__eyebrow">Kindly Respond</p>

          <h2>Will You Join Us?</h2>

          <div className="rsvp-section__ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="rsvp-section__description">
            We would be honoured to celebrate with you in Mumbai. Please
            respond for each invited guest by October 1, 2026.
          </p>

         
        </header>

        <div className="rsvp-form-wrapper">
          <span
            className="rsvp-form-wrapper__corner rsvp-form-wrapper__corner--top"
            aria-hidden="true"
          />
          <span
            className="rsvp-form-wrapper__corner rsvp-form-wrapper__corner--bottom"
            aria-hidden="true"
          />

          {submitted ? (
            formData.attendance === "declines" ? (
              <div className="rsvp-success" aria-live="polite">
                <span aria-hidden="true">✦</span>
                <h3>We'll miss you</h3>
                <p>
                  We're so sorry you can't make it. You'll be missed! Thanks
                  for letting us know. If anything changes, feel free to
                  reach out. We'd love to have you if you can make it after
                  all.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <div className="rsvp-success" aria-live="polite">
                <span aria-hidden="true">✦</span>
                <h3>Thank you for responding</h3>
                <p>
                  Your RSVP has been received. We cannot wait to celebrate
                  with you in Mumbai.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialForm);
                    setSubmitted(false);
                  }}
                >
                  Submit another response
                </button>
              </div>
            )
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit}>
              <label className="rsvp-field">
                <span>Full name</span>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <fieldset className="rsvp-fieldset">
                <legend>Will you be attending?</legend>

                <div className="rsvp-choice-row">
                  <label>
                    <input
                      type="radio"
                      name="attendance"
                      value="accepts"
                      checked={formData.attendance === "accepts"}
                      onChange={handleChange}
                    />

                    <span>Joyfully accepts</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="attendance"
                      value="declines"
                      checked={formData.attendance === "declines"}
                      onChange={handleChange}
                    />

                    <span>Regretfully declines</span>
                  </label>
                </div>
              </fieldset>

              {formData.attendance === "accepts" && (
                <>
                  <label className="rsvp-field">
                    <span>Email address</span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className="rsvp-field">
                    <span>Number of guests</span>

                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                    >
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                    </select>
                  </label>

                  <fieldset className="rsvp-fieldset">
                    <legend>Which celebrations will you attend?</legend>

                    <div className="rsvp-celebration-list">
                      {celebrationOptions.map((celebration) => (
                        <label
                          className="rsvp-celebration-check"
                          key={celebration.id}
                        >
                          <input
                            type="checkbox"
                            value={celebration.id}
                            checked={formData.celebrations.includes(
                              celebration.id
                            )}
                            onChange={handleCelebrationChange}
                          />

                          <span className="rsvp-celebration-check__text">
                            <span className="rsvp-celebration-check__name">
                              {celebration.label}
                            </span>
                            <span className="rsvp-celebration-check__date">
                              {celebration.date}
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="rsvp-field">
                    <span>When are you arriving in Mumbai?</span>

                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                    />
                  </label>

                  <fieldset className="rsvp-fieldset">
                    <legend>Will you require accommodation?</legend>

                    <div className="rsvp-choice-row">
                      <label>
                        <input
                          type="radio"
                          name="accommodation"
                          value="yes"
                          checked={formData.accommodation === "yes"}
                          onChange={handleChange}
                        />

                        <span>Yes</span>
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="accommodation"
                          value="no"
                          checked={formData.accommodation === "no"}
                          onChange={handleChange}
                        />

                        <span>No</span>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="rsvp-fieldset">
                    <legend>Will you require airport pickup?</legend>

                    <div className="rsvp-choice-row">
                      <label>
                        <input
                          type="radio"
                          name="airportPickup"
                          value="yes"
                          checked={formData.airportPickup === "yes"}
                          onChange={handleChange}
                        />

                        <span>Yes</span>
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="airportPickup"
                          value="no"
                          checked={formData.airportPickup === "no"}
                          onChange={handleChange}
                        />

                        <span>No</span>
                      </label>
                    </div>
                  </fieldset>

                  <label className="rsvp-field">
                    <span>Any dietary preferences</span>

                    <textarea
                      name="dietaryNotes"
                      value={formData.dietaryNotes}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Vegetarian preferences, allergies or anything else we should know"
                    />
                  </label>
                </>
              )}

              <button className="rsvp-form__submit" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send My RSVP"}
                <span aria-hidden="true">→</span>
              </button>

              {submitError && (
                <p className="rsvp-form__error" role="alert">
                  Something went wrong sending your RSVP. Please try again in a moment.
                </p>
              )}

              <p className="rsvp-form__privacy">
                Your details will only be used for wedding planning.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}