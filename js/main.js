const includes = [
  { id: 'include-navbar',      file: 'sections/navbar.html' },
  { id: 'include-hero',        file: 'sections/hero.html' },
  { id: 'include-new-release', file: 'sections/new-release.html' },
  { id: 'include-bio',         file: 'sections/bio.html' },
  { id: 'include-quick-links', file: 'sections/quick-links.html' },
  { id: 'include-discography', file: 'sections/discography.html' },
  { id: 'include-break',       file: 'sections/break.html' },
  { id: 'include-live',        file: 'sections/live.html' },
  { id: 'include-fresh-finds', file: 'sections/fresh-finds.html' },
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
  'bangalore-bychance': {
    title: 'Bangalore Bychance',
    photos: [
      'pics/shows/bangalore-bychance-1.jpg',
      'pics/shows/bangalore-bychance-2.jpg',
      'pics/shows/bangalore-bychance-3.jpg',
      'pics/shows/bangalore-bychance-4.jpg',
      'pics/shows/bangalore-bychance-5.jpg',
    ]
  },
  'fandom': {
    title: 'Fandom',
    photos: [
      'pics/shows/fandom-1.jpg',
      'pics/shows/fandom-2.jpg',
      'pics/shows/fandom-3.jpg',
      'pics/shows/fandom-4.jpg',
      'pics/shows/fandom-5.jpg',
    ]
  },
  'iit-madras': {
    title: 'IIT Madras',
    photos: [
      'pics/shows/iit-madras-1.jpg',
      'pics/shows/iit-madras-2.jpg',
      'pics/shows/iit-madras-3.jpg',
      'pics/shows/iit-madras-4.jpg',
      'pics/shows/iit-madras-5.jpg',
    ]
  },
  'octavia': {
    title: 'Octavia — MCC',
    photos: [
      'pics/shows/octavia-1.jpg',
      'pics/shows/octavia-2.jpg',
      'pics/shows/octavia-3.jpg',
      'pics/shows/octavia-4.jpg',
      'pics/shows/octavia-5.jpg',
    ]
  },
  'festember': {
    title: 'NIT Trichy Festember',
    photos: [
      'pics/shows/festember-1.jpg',
      'pics/shows/festember-2.jpg',
      'pics/shows/festember-3.jpg',
      'pics/shows/festember-4.jpg',
      'pics/shows/festember-5.jpg',
    ]
  },
  'circle-of-love-nye': {
    title: 'Circle of Love NYE',
    photos: [
      'pics/shows/circle-of-love-nye-1.jpg',
      'pics/shows/circle-of-love-nye-2.jpg',
      'pics/shows/circle-of-love-nye-3.jpg',
      'pics/shows/circle-of-love-nye-4.jpg',
      'pics/shows/circle-of-love-nye-5.jpg',
    ]
  },
  'phoenix': {
    title: 'Phoenix Market City',
    photos: [
      'pics/shows/phoenix-1.jpg',
      'pics/shows/phoenix-2.jpg',
      'pics/shows/phoenix-3.jpg',
      'pics/shows/phoenix-4.jpg',
      'pics/shows/phoenix-5.jpg',
    ]
  },
  'summer-bang-3': {
    title: 'Summer Bang Chapter 3',
    photos: [
      'pics/shows/summer-bang-3-1.jpg',
      'pics/shows/summer-bang-3-2.jpg',
      'pics/shows/summer-bang-3-3.jpg',
      'pics/shows/summer-bang-3-4.jpg',
      'pics/shows/summer-bang-3-5.jpg',
    ]
  },
  'the-park': {
    title: 'The Park Hotel',
    photos: [
      'pics/shows/the-park-1.jpg',
      'pics/shows/the-park-2.jpg',
      'pics/shows/the-park-3.jpg',
      'pics/shows/the-park-4.jpg',
      'pics/shows/the-park-5.jpg',
    ]
  },
};

const festivalData = {
  'circle-of-love-2023': {
    title: 'Circle of Love 2023',
    photos: [
      'pics/festivals/circle-of-love-2023-1.jpg',
      'pics/festivals/circle-of-love-2023-2.jpg',
      'pics/festivals/circle-of-love-2023-3.jpg',
      'pics/festivals/circle-of-love-2023-4.jpg',
      'pics/festivals/circle-of-love-2023-5.jpg',
    ]
  },
  'covelong-2023': {
    title: 'Surf Turf Covelong 2023',
    photos: [
      'pics/festivals/covelong-2023-1.jpg',
      'pics/festivals/covelong-2023-2.jpg',
      'pics/festivals/covelong-2023-3.jpg',
      'pics/festivals/covelong-2023-4.jpg',
      'pics/festivals/covelong-2023-5.jpg',
    ]
  },
  'ric-chennai': {
    title: 'Running in Circles Tour — Chennai',
    photos: [
      'pics/festivals/ric-chennai-1.jpg',
      'pics/festivals/ric-chennai-2.jpg',
      'pics/festivals/ric-chennai-3.jpg',
      'pics/festivals/ric-chennai-4.jpg',
      'pics/festivals/ric-chennai-5.jpg',
    ]
  },
  'ric-bangalore': {
    title: 'Running in Circles Tour — Bangalore',
    photos: [
      'pics/festivals/ric-bangalore-1.jpg',
      'pics/festivals/ric-bangalore-2.jpg',
      'pics/festivals/ric-bangalore-3.jpg',
      'pics/festivals/ric-bangalore-4.jpg',
      'pics/festivals/ric-bangalore-5.jpg',
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

  // duplicate cards for infinite scroll
  document.querySelectorAll('.live-scroll-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });
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

window.openFestivalGallery = function(key) {
  const data = festivalData[key];
  if (!data) return;

  const lightbox = document.getElementById('lightbox');
  const lbImg    = lightbox.querySelector('.lightbox-img');

  let currentIndex = 0;
  const photos = data.photos;

  function show(index) {
    currentIndex = (index + photos.length) % photos.length;
    lbImg.src = photos[currentIndex];
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', keyHandler);
    lightbox.removeEventListener('click', backdropHandler);
  }

  function keyHandler(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  }

  function backdropHandler(e) {
    if (e.target === lightbox) closeLightbox();
  }

  show(0);
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  const freshClose = lightbox.querySelector('.lightbox-close');
  const freshPrev  = lightbox.querySelector('.lightbox-prev');
  const freshNext  = lightbox.querySelector('.lightbox-next');

  // remove old listeners by cloning
  const newClose = freshClose.cloneNode(true);
  const newPrev  = freshPrev.cloneNode(true);
  const newNext  = freshNext.cloneNode(true);
  freshClose.replaceWith(newClose);
  freshPrev.replaceWith(newPrev);
  freshNext.replaceWith(newNext);

  newClose.addEventListener('click', closeLightbox);
  newPrev.addEventListener('click',  () => show(currentIndex - 1));
  newNext.addEventListener('click',  () => show(currentIndex + 1));
  document.addEventListener('keydown', keyHandler);
  lightbox.addEventListener('click', backdropHandler);
};

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

  function openModal(title, photos) {
    modalTitle.textContent = title;
    modalGrid.innerHTML = '';
    photos.forEach((src, i) => {
      const div = document.createElement('div');
      div.classList.add('grid-photo');
      const img = document.createElement('img');
      img.alt = `${title} — ${i + 1}`;
      img.src = src;
      img.onerror = () => {
        div.classList.add('placeholder');
        div.innerHTML = '<span>Photo Coming Soon</span>';
      };
      img.addEventListener('click', () => openLightbox(photos, i));
      div.appendChild(img);
      modalGrid.appendChild(div);
    });
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.live-card').forEach(card => {
    card.addEventListener('click', () => {
      const key  = card.dataset.show;
      const data = showData[key];
      if (!data) return;
      openModal(data.title, data.photos);
    });
  });

  document.querySelectorAll('.festival-gallery-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.festival;
      window.openFestivalGallery(key);
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
