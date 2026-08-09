// ============ NAV ============
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  })
);

// ============ SCROLL REVEAL ============
const revealItems = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealItems.forEach(el => io.observe(el));

// ============ COUNTDOWN ============
// Edit WEDDING_DATE below if your ceremony date changes.
const WEDDING_DATE = new Date('2027-01-29T10:00:00+05:30').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = WEDDING_DATE - now;

  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };

  if (diff <= 0) {
    els.days.textContent = '00';
    els.hours.textContent = '00';
    els.mins.textContent = '00';
    els.secs.textContent = '00';
    return;
  }

  const pad = n => String(n).padStart(2, '0');
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.mins.textContent = pad(mins);
  els.secs.textContent = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============ RSVP form (Formspree) ============
const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener('submit', async (e) => {
  const action = rsvpForm.getAttribute('action') || '';
  if (action.includes('YOUR_FORM_ID')) {
    // Formspree not configured yet — let the user know instead of failing silently.
    e.preventDefault();
    alert('RSVP form is almost ready! The site owner still needs to connect a form endpoint (see README.md — "Connecting the RSVP form").');
    return;
  }

  e.preventDefault();
  const btn = rsvpForm.querySelector('.btn');
  const original = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch(action, {
      method: 'POST',
      body: new FormData(rsvpForm),
      headers: { Accept: 'application/json' }
    });
    if (res.ok) {
      rsvpForm.innerHTML = '<p style="font-family: var(--display); font-style: italic; font-size: 1.4rem; color: var(--gold-light);">Thank you — your RSVP has been received! 🤍</p>';
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (err) {
    btn.textContent = original;
    btn.disabled = false;
    alert('Something went wrong sending your RSVP — please try again or email us directly.');
  }
});
