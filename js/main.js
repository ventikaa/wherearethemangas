const includes = [
  { id: 'include-navbar',      file: 'sections/navbar.html' },
  { id: 'include-hero',        file: 'sections/hero.html' },
  { id: 'include-ticker',      file: 'sections/ticker.html' },
  { id: 'include-new-release', file: 'sections/new-release.html' },
  { id: 'include-bio',         file: 'sections/bio.html' },
  { id: 'include-discography', file: 'sections/discography.html' },
  { id: 'include-break', file: 'sections/break.html' }, 
  { id: 'include-live',        file: 'sections/live.html' },
  { id: 'include-press',       file: 'sections/press.html' }, 
  { id: 'include-photo-strip', file: 'sections/photo-strip.html' },
  { id: 'include-footer',      file: 'sections/footer.html' },
];

const showData = {
  'summer-bang': {
    title: 'Summer Bang House Party',
    photos: [
      'pics/houseparty1.jpeg',
      'pics/houseparty2.jpeg',
      'pics/houseparty3.jpeg',
      'pics/houseparty4.jpeg',
      'pics/houseparty5.jpeg',
    ]
  },
  'turn-up-devoid': {
    title: 'Turn Up for Devoid',
    photos: [
      'pics/shows/turn-up-devoid-1.jpg',
      'pics/shows/turn-up-devoid-2.jpg',
      'pics/shows/turn-up-devoid-3.jpg',
      'pics/shows/turn-up-devoid-4.jpg',
      'pics/shows/turn-up-devoid-5.jpg',
    ]
  },
  'running-in-circles': {
    title: 'Running in Circles Tour',
    photos: [
      'pics/shows/running-in-circles-1.jpg',
      'pics/shows/running-in-circles-2.jpg',
      'pics/shows/running-in-circles-3.jpg',
      'pics/shows/running-in-circles-4.jpg',
      'pics/shows/running-in-circles-5.jpg',
    ]
  },
};

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
  initLiveShows();
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
}

function initLiveShows() {
  const modal      = document.getElementById('showModal');
  if (!modal) return;

  const modalTitle = modal.querySelector('.show-modal-title');
  const modalGrid  = modal.querySelector('.show-modal-grid');
  const closeBtn   = modal.querySelector('.show-modal-close');

  const lightbox   = document.getElementById('lightbox');
  const lbImg      = lightbox.querySelector('.lightbox-img');
  const lbClose    = lightbox.querySelector('.lightbox-close');
  const lbPrev     = lightbox.querySelector('.lightbox-prev');
  const lbNext     = lightbox.querySelector('.lightbox-next');

  let currentPhotos = [];
  let currentIndex  = 0;

  document.querySelectorAll('.live-card').forEach(card => {
    card.addEventListener('click', () => {
      const key  = card.dataset.show;
      const data = showData[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalGrid.innerHTML = '';

      data.photos.forEach((src, i) => {
        const div = document.createElement('div');
        div.classList.add('grid-photo');

        const img = document.createElement('img');
        img.alt = `${data.title} — ${i + 1}`;
        img.src = src;

        img.onerror = () => {
          div.classList.add('placeholder');
          div.innerHTML = '<span>Photo Coming Soon</span>';
        };

        img.addEventListener('click', () => openLightbox(data.photos, i));
        div.appendChild(img);
        modalGrid.appendChild(div);
      });

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openLightbox(photos, index) {
    currentPhotos = photos;
    currentIndex  = index;
    lbImg.src     = photos[index];
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  function prev() {
    currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
    lbImg.src = currentPhotos[currentIndex];
  }

  function next() {
    currentIndex = (currentIndex + 1) % currentPhotos.length;
    lbImg.src = currentPhotos[currentIndex];
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    } else if (modal.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
    }
  });
}

loadIncludes();
