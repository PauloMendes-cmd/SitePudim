
const counterEl = document.getElementById('counterDigits');
if (counterEl) {
  const base = 1987234;
  const bump = Math.floor(Math.random() * 40) + 1;
  const target = base + bump;
  let current = base;
  const step = () => {
    current += Math.ceil((target - current) / 6) || (current < target ? 1 : 0);
    counterEl.textContent = String(Math.min(current, target)).padStart(9, '0');
    if (current < target) requestAnimationFrame(step);
  };
  setTimeout(step, 500);
}

const copyBtn = document.getElementById('copyLinkBtn');
const copyLabel = document.getElementById('copyLinkLabel');

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyLabel.textContent = 'Link copiado!';
    } catch (err) {
      copyLabel.textContent = 'Copie manualmente';
    }
    setTimeout(() => { copyLabel.textContent = 'Copiar link'; }, 2200);
  });
}

const stage = document.getElementById('pudimStage');
const body = document.getElementById('pudimBody');
if (stage && body && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        body.style.animation = 'none';
        void body.offsetWidth;
        body.style.animation = '';
      }
    });
  }, { threshold: 0.6 });
  observer.observe(stage);
}
