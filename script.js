// script.js — Basic interactivity for the portfolio
document.addEventListener('DOMContentLoaded', () => {
  // Header year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu toggle
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlayMenu');
  const closeMenu = document.getElementById('closeMenu');

  function openMenu(){
    overlay.setAttribute('aria-hidden','false');
    hamburger.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function hideMenu(){
    overlay.setAttribute('aria-hidden','true');
    hamburger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  closeMenu.addEventListener('click', hideMenu);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideMenu();
  });

  // Accessible accordion for FAQ
  const accTriggers = document.querySelectorAll('.acc-trigger');
  accTriggers.forEach(btn => {
    const panel = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }
    });
  });

  // Newsletter form — prepared for Formspree hookup
  const form = document.getElementById('newsletterForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      return;
    }

    // If you add your Formspree action to the form, remove the fetch here and let the form submit naturally
    // Example: form.action = 'https://formspree.io/f/YOUR_ID'
    // For now we simulate success and instruct how to connect
    msg.textContent = 'Thanks — you\'re on the list (demo). Replace form action with your Formspree endpoint to enable real signup.';
    form.reset();

    // Optionally send to a configured endpoint via fetch (uncomment and set the URL)
    /*
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({email})
      });
      if (res.ok){
        msg.textContent = 'Thanks — check your inbox for confirmation.';
        form.reset();
      } else {
        msg.textContent = 'Subscription failed. Please try again later.';
      }
    } catch(err){
      console.error(err);
      msg.textContent = 'Network error. Please try again later.';
    }
    */
  });

  // Next project loading dots animation
  const dots = document.getElementById('dots');
  let dotCount = 3;
  setInterval(() => {
    dotCount = (dotCount % 3) + 1;
    dots.textContent = '.'.repeat(dotCount);
  }, 600);

  // Small enhancement: pause morph animations when tab is not visible to reduce CPU on mobile
  const blobs = document.querySelectorAll('.blob');
  document.addEventListener('visibilitychange', () => {
    const play = document.visibilityState === 'visible';
    blobs.forEach(b => b.style.animationPlayState = play ? 'running' : 'paused');
  });
});
