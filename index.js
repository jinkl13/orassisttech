/* =================================================================
   ORASSIST — Interactive Behavior
   Modules: Navigation, Typewriter, ROI Calculator, Scroll Reveal,
            Contact Form, Wix Drawer
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTypewriter();
  initRoiCalculator();
  initScrollReveal();
  initContactForm();
  initWixDrawer();
});

/* -----------------------------------------------------------------
   1. NAVIGATION — header scroll, mobile menu, active section
   ----------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!header) return;

  // Shrink header on scroll
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 50);
    highlightActiveSection();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (hamburger) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Highlight nav link matching visible section
  function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;

    let currentId = '';
    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }
}

/* -----------------------------------------------------------------
   2. TYPEWRITER — exact spec from typewriter-wix-prompt.md
   
   Behavior:
   - Types character by character
   - Once fully typed, word stays for PAUSE_DURATION
   - Then clears instantly (no deletion animation)
   - Blinking cursor is CSS-only (the | span)
   - Loops indefinitely
   ----------------------------------------------------------------- */
function initTypewriter() {
  const WORDS = [
    "your static hand for saliva ejection.",
    "your hands-free dental assistant alternative.",
    "maximum clinical efficiency and hygiene.",
    "ergonomic, whisper-quiet suction control."
  ];

  const TYPING_SPEED   = 60;   // ms between characters
  const PAUSE_DURATION = 2200; // ms word stays visible after typing

  const el = document.getElementById('typewriter-text');
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;

  function typeNextChar() {
    const word = WORDS[wordIndex];

    if (charIndex <= word.length) {
      el.textContent = word.substring(0, charIndex);
      charIndex++;
      setTimeout(typeNextChar, TYPING_SPEED);
    } else {
      // Word fully typed — pause, then clear and move to next
      setTimeout(() => {
        charIndex = 0;
        wordIndex = (wordIndex + 1) % WORDS.length;
        el.textContent = '';
        typeNextChar();
      }, PAUSE_DURATION);
    }
  }

  typeNextChar();
}

/* -----------------------------------------------------------------
   3. ROI CALCULATOR — interactive savings estimator
   
   Inputs: chairs, staff salary/chair/mo, procedures/chair/day
   Outputs: monthly savings (₹), hours saved/mo, payback (weeks)
   ----------------------------------------------------------------- */
function initRoiCalculator() {
  const sliderChairs     = document.getElementById('slider-chairs');
  const sliderSalary     = document.getElementById('slider-salary');
  const sliderProcedures = document.getElementById('slider-procedures');

  const valChairs     = document.getElementById('val-chairs');
  const valSalary     = document.getElementById('val-salary');
  const valProcedures = document.getElementById('val-procedures');

  const outSavings = document.getElementById('out-savings');
  const outHours   = document.getElementById('out-hours');
  const outPayback = document.getElementById('out-payback');

  if (!sliderChairs || !sliderSalary || !sliderProcedures) return;

  const DEVICE_COST = 12000;       // ₹ per ASSIST 1.0 unit
  const DENTIST_HOUR_VALUE = 300;  // ₹ notional value of 1 saved clinical hour
  const WORKING_DAYS = 24;         // per month
  const MINUTES_SAVED_PER_PROC = 10; // minutes saved per procedure with ASSIST

  function calculate() {
    const chairs     = parseInt(sliderChairs.value);
    const salary     = parseInt(sliderSalary.value);
    const procedures = parseInt(sliderProcedures.value);

    // Update slider labels
    valChairs.textContent     = chairs;
    valSalary.textContent     = '₹' + salary.toLocaleString('en-IN');
    valProcedures.textContent = procedures;

    // --- Savings logic ---

    // 1. Staff efficiency: ASSIST handles suction → ~35% of assistant time freed
    const staffSaving = chairs * salary * 0.35;

    // 2. Time value: 10 min saved per procedure
    const totalProcs   = chairs * procedures * WORKING_DAYS;
    const hoursSaved   = Math.round((totalProcs * MINUTES_SAVED_PER_PROC) / 60);
    const timeSaving   = hoursSaved * DENTIST_HOUR_VALUE;

    // 3. Totals
    const monthlySavings = Math.round(staffSaving + timeSaving);

    // 4. Payback period
    const investment   = chairs * DEVICE_COST;
    const weeklySaving = monthlySavings / 4.33;
    const paybackWeeks = weeklySaving > 0 ? (investment / weeklySaving).toFixed(1) : '∞';

    // Animate outputs
    animateNumber(outSavings, monthlySavings, '₹');
    animateNumber(outHours, hoursSaved, '', ' hrs');

    if (parseFloat(paybackWeeks) < 1) {
      outPayback.textContent = '< 1 week';
    } else {
      outPayback.textContent = paybackWeeks + ' weeks';
    }
  }

  // Bind
  [sliderChairs, sliderSalary, sliderProcedures].forEach(s => {
    s.addEventListener('input', calculate);
  });

  // Initial run
  calculate();
}

/**
 * Smoothly count a number up using requestAnimationFrame.
 * @param {HTMLElement} el - target element
 * @param {number} target - final number
 * @param {string} prefix - e.g. '₹'
 * @param {string} suffix - e.g. ' hrs'
 */
function animateNumber(el, target, prefix, suffix) {
  prefix = prefix || '';
  suffix = suffix || '';

  const current = parseInt(el.textContent.replace(/[^0-9]/g, '')) || 0;
  const duration = 600; // ms
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out quad
    const eased = 1 - (1 - progress) * (1 - progress);
    const value = Math.round(current + (target - current) * eased);

    if (prefix === '₹') {
      el.textContent = prefix + value.toLocaleString('en-IN') + suffix;
    } else {
      el.textContent = prefix + value + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/* -----------------------------------------------------------------
   4. SCROLL REVEAL — IntersectionObserver based
   ----------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* -----------------------------------------------------------------
   5. CONTACT FORM — client-side validation & success state
   ----------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('input-name');
    const email   = document.getElementById('input-email');
    const phone   = document.getElementById('input-phone');
    const message = document.getElementById('input-message');

    // Reset previous error states
    [name, email, phone, message].forEach(el => {
      if (el) el.style.borderColor = '';
    });

    let valid = true;

    if (!name.value.trim()) {
      name.style.borderColor = 'var(--error)';
      valid = false;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = 'var(--error)';
      valid = false;
    }
    if (!phone.value.trim()) {
      phone.style.borderColor = 'var(--error)';
      valid = false;
    }

    if (!valid) return;

    // Replace form with success message
    const panel = form.closest('.form-card');
    const savedHTML = panel.innerHTML;

    panel.innerHTML = `
      <div class="form-success">
        <div class="check-icon">✓</div>
        <h3>Thank You, Doctor!</h3>
        <p style="color: var(--on-surface); margin: var(--space-sm) 0 var(--space-md);">
          Your inquiry has been received. Our clinical specialist will contact you
          within 2 hours on your registered number.
        </p>
        <button class="btn btn-secondary btn-sm" id="btn-reset-form">Send Another</button>
      </div>
    `;

    document.getElementById('btn-reset-form').addEventListener('click', () => {
      panel.innerHTML = savedHTML;
      initContactForm(); // re-bind
    });
  });
}

/* -----------------------------------------------------------------
   6. WIX DRAWER — expand/collapse + tab switching
   ----------------------------------------------------------------- */
function initWixDrawer() {
  const toggle  = document.querySelector('.wix-drawer-toggle');
  const body    = document.querySelector('.wix-drawer-body');
  const icon    = document.getElementById('drawer-icon');
  const tabs    = document.querySelectorAll('.tab-btn');
  const panels  = document.querySelectorAll('.tab-panel');

  if (toggle && body) {
    toggle.addEventListener('click', () => {
      const open = body.style.display === 'block';
      body.style.display = open ? 'none' : 'block';
      if (icon) icon.textContent = open ? '+' : '−';
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(target + '-panel');
      if (panel) panel.classList.add('active');
    });
  });
}
