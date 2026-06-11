const overlay    = document.getElementById('overlay');
const openBtn    = document.getElementById('open-overlay');
const closeBtn   = document.getElementById('close-overlay');
const iframeEl   = document.getElementById('overlay-iframe');

const YT_SRC = 'https://www.youtube.com/embed/7u6-hMqBoWo?autoplay=1&rel=0&enablejsapi=1&origin=' + window.location.origin;

function openOverlay() {
  iframeEl.src = YT_SRC;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  iframeEl.src = '';               // stops video playback
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* open */
openBtn.addEventListener('click', openOverlay);
openBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') openOverlay();
});

/* close — button, backdrop click, Escape key */
closeBtn.addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});
