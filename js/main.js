const includes = [
  { id: 'include-navbar',      file: 'sections/navbar.html' },
  { id: 'include-hero',        file: 'sections/hero.html' },
  { id: 'include-ticker',      file: 'sections/ticker.html' },
  { id: 'include-new-release', file: 'sections/new-release.html' },
  { id: 'include-bio',         file: 'sections/bio.html' },
  { id: 'include-discography', file: 'sections/discography.html' },
  { id: 'include-press',       file: 'sections/press.html' },
  { id: 'include-photo-strip', file: 'sections/photo-strip.html' },
  { id: 'include-footer',      file: 'sections/footer.html' },
];

async function loadIncludes() {
  for (const item of includes) {
    const el = document.getElementById(item.id);
    if (!el) continue;
    try {
      const res = await fetch(item.file);
      if (!res.ok) throw new Error(`Could not load ${item.file}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.warn(err.message);
    }
  }
  initReveal();
  initCarousel();
}

function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
}

function initCarousel() {
  const carousel = document.querySelector('.bio-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dotsContainer = carousel.querySelector('.carousel-dots');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');

  if (slides.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  let current = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // uncomment to auto-advance every 4 seconds
  // setInterval(() => goTo(current + 1), 4000);
}

loadIncludes();