/* ====================================================
   RCRG — main.js  (generado automáticamente)
   ==================================================== */

// ---- NAV ----
function navScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  setActive(id);
}
function setActive(id) {
  document.querySelectorAll('[data-section]').forEach(b =>
    b.classList.toggle('active', b.dataset.section === id)
  );
}
window.addEventListener('scroll', () => {
  const sections = ['inicio','historia','galeria','regatas','noticias','convenios','contacto'];
  const pos = window.scrollY + 100;
  for (const s of sections) {
    const el = document.getElementById(s);
    if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
      setActive(s); break;
    }
  }
});

// ---- MOBILE NAV ----
function toggleMobileMenu() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

// ---- LIGHTBOX ----
function openLightbox(src, alt) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').alt = alt || '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// ---- YEAR TABS (Regattas) ----
function showYear(year) {
  document.querySelectorAll('.regatta-year').forEach(el =>
    el.style.display = el.dataset.year === year ? 'grid' : 'none'
  );
  document.querySelectorAll('.year-tab').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.year === year)
  );
}
document.addEventListener('DOMContentLoaded', () => showYear('2026'));

// ---- TOAST ----
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ---- CONTACT FORM ----
function submitContactForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  const data = {
    name:    document.getElementById('f-name').value,
    email:   document.getElementById('f-email').value,
    subject: document.getElementById('f-subject').value,
    message: document.getElementById('f-message').value,
    date:    new Date().toISOString()
  };
  const msgs = JSON.parse(localStorage.getItem('rcrg_messages') || '[]');
  msgs.push(data);
  localStorage.setItem('rcrg_messages', JSON.stringify(msgs));
  setTimeout(() => {
    showToast('Mensaje guardado. Nos pondremos en contacto pronto.', 'success');
    document.getElementById('contact-form').reset();
    btn.disabled = false;
    btn.textContent = 'Enviar Mensaje';
  }, 700);
}

// ---- EDITION COUNTERS ----
(function() {
  const yr = new Date().getFullYear();
  const el = id => document.getElementById(id);
  if (el('edition-rt'))    el('edition-rt').textContent    = 30 + (yr - 2026);
  if (el('edition-sr'))    el('edition-sr').textContent    = 58 + (yr - 2026);
  if (el('edition-santa')) el('edition-santa').textContent = 4  + (yr - 2026);
  if (el('footer-year'))
    el('footer-year').textContent =
      '© ' + yr + ' Real Club de Regatas Galicia. Todos los derechos reservados.';
})();