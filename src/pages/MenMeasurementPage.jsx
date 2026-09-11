import { useEffect, useRef, useState } from 'react';
import measurementGuide from '../../assets/measurements/men.png';
import './WomenMeasurementPage.css';

const measurements = [
  'Neck Circumference', 'Chest', 'Waist', 'Hips', 'Sleeve Length',
  'Shoulder Width', 'Back Length (Neck to Waist)', 'Total Length (Shoulder to Hem)',
  'Bicep Circumference', 'Forearm Circumference', 'Wrist Circumference', 'Armhole',
  'Thigh Circumference', 'Knee Circumference', 'Calf Circumference',
  'Inseam Length', 'Outseam Length',
];

const MEN_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwrGsOJlzZZutbjyrzoMQgV9g-SFY6Ta1bsrkckKXy1o_jk4PuSVtO3OMF7ONWPAwnWQA/exec';
const MEN_SUBMISSIONS_ENABLED = true;

export default function MenMeasurementPage() {
  const [name, setName] = useState('');
  const [inspiration, setInspiration] = useState('');
  const [values, setValues] = useState({});
  const [status, setStatus] = useState('idle');
  const request = useRef(null);
  const sending = useRef(false);
  const completed = measurements.filter((_, index) => Number(values[index]) > 0).length;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Men’s Measurements | Ankita & Siddharth';
    return () => { document.title = previousTitle; };
  }, []);


  async function submitMeasurements(event) {
    event.preventDefault();
    if (sending.current || status === 'success') return;
    const payload = { form: 'men', name: name.trim(), inspiration: inspiration.trim(), measurements: measurements.map((_, index) => Number(values[index])) };
    if (!payload.name || payload.name.length > 200 || payload.measurements.some(value => !Number.isFinite(value) || value < 0.01)) return;
    const fingerprint = JSON.stringify(payload);
    if (request.current?.fingerprint !== fingerprint) {
      request.current = { fingerprint, submissionId: crypto.randomUUID() };
    }
    sending.current = true;
    setStatus('sending');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      if (payload.inspiration) {
        const readiness = await fetch(MEN_ENDPOINT, { signal: controller.signal });
        const capabilities = await readiness.json();
        if (capabilities.form !== 'men' || capabilities.inspirationSupported !== true) {
          setStatus('setup');
          return;
        }
      }
      const response = await fetch(MEN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...payload, submissionId: request.current.submissionId }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.status !== 'success' || result.form !== 'men' || result.submissionId !== request.current.submissionId) throw new Error('Save not confirmed');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timeout);
      sending.current = false;
    }
  }


  return (
    <div className="measurement-page section-ambient-bg">
      <div className="measurement-container">
        <a className="measurement-back" href="/">← Back to our wedding</a>
        <header className="measurement-header">
          <p className="section-eyebrow">A little detail for the perfect fit</p>
          <h1>Men’s Measurements</h1>
          <p>Use the men’s guide below to fill in your 17 measurements.<br />Enter every value in centimeters (cm).</p>
        </header>

        <main className="measurement-layout">
          <aside className="measurement-reference" aria-label="Men’s measurement reference">
            <figure>
              <a href={measurementGuide} target="_blank" rel="noreferrer" aria-label="Open the full-size men’s measurement guide in a new tab">
                <img src={measurementGuide} alt="Men’s measurement guide with numbered arrows showing front, back, arm, and lower-body measurements. Match the numbers to the form fields." />
              </a>
              <figcaption>Follow the matching numbers in the guide. <a href={measurementGuide} target="_blank" rel="noreferrer">Open full-size guide ↗</a></figcaption>
            </figure>
          </aside>

          <section className="measurement-card" aria-labelledby="measurement-form-title">
            <div className="measurement-card-heading">
              <p className="section-eyebrow">Made to measure</p>
              <h2 id="measurement-form-title">Your outfit, your fit</h2>
              <p>Use a flexible measuring tape, keep it snug without pulling tight, and stand in a relaxed posture.</p>
            </div>
            <form onSubmit={submitMeasurements} aria-busy={status === 'sending'}>
              <div className="measurement-field measurement-name">
                <label htmlFor="measurement-name">Name (required)</label>
                <div className="measurement-input-wrap">
                  <input id="measurement-name" name="name" type="text" autoComplete="name" required maxLength={200} disabled={status === 'sending' || status === 'success'} pattern=".*\S.*" title="Please enter your name." value={name} placeholder="Your name" onChange={(event) => {
                    setName(event.target.value);
                  }} />
                </div>
              </div>
              <div className="measurement-form-meta">
                <span>All 17 measurements are required · cm</span>
                <span aria-live="polite">{completed} / 17 filled</span>
              </div>
              <div className="measurement-fields">
                {measurements.map((label, index) => (
                  <div className="measurement-field" key={label}>
                    <label htmlFor={`measurement-${index}`}><span className="measurement-number" aria-hidden="true">{index + 1}</span>{label}</label>
                    <div className="measurement-input-wrap">
                      <input id={`measurement-${index}`} name={label} type="number" inputMode="decimal" min="0.01" step="any" required disabled={status === 'sending' || status === 'success'} value={values[index] ?? ''} placeholder="0.0" aria-describedby="measurement-unit" onChange={(event) => {
                        setValues({ ...values, [index]: event.target.value });
                          }} />
                      <span aria-hidden="true">cm</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="measurement-field measurement-notes">
                <label htmlFor="measurement-inspiration">Outfit inspiration (optional)</label>
                <textarea id="measurement-inspiration" name="inspiration" rows={4} maxLength={2000} value={inspiration} disabled={status === 'sending' || status === 'success'} placeholder="Tell us about colors, fabrics, styles, embroidery, or any other ideas you have in mind." onChange={(event) => setInspiration(event.target.value)} />
              </div>
              <p id="measurement-unit" className="measurement-note">All values are in centimeters. Double-check your measurements against the guide before submitting.</p>
              <button className="measurement-submit" type="submit" disabled={!MEN_SUBMISSIONS_ENABLED || status === 'sending' || status === 'success'} aria-describedby="measurement-submission-note">{status === 'sending' ? 'Submitting…' : status === 'success' ? 'Measurements submitted' : status === 'error' ? 'Retry submission' : 'Submit measurements'}</button>
              <p id="measurement-submission-note" className="measurement-note" role="status">{!MEN_SUBMISSIONS_ENABLED ? 'Submissions will open soon. Your measurements have not been submitted.' : status === 'success' ? 'Thank you! Your measurements have been saved.' : status === 'setup' ? 'Saving inspiration notes is not available yet. Your entries are still here; please try again once the organizers update the form.' : status === 'error' ? 'We couldn’t confirm that your measurements were saved. Your entries are still here. Please retry; an unchanged submission will not be saved twice.' : 'Your name and measurements will be sent to the wedding organizers.'}</p>
              <div className="measurement-inspiration">
                <h3>Share your outfit inspiration</h3>
                <p>Create a folder with your name in the shared Drive folder, then upload any inspiration pictures of wedding outfits or designs you have in mind.</p>
                <a href="https://drive.google.com/drive/folders/1GaQWX5_7QFIVMtnVQaPAZjQHgLarfbpd?usp=sharing" target="_blank" rel="noopener noreferrer">Open the inspiration folder ↗</a>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
