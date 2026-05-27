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
      'pics/devoid/au1.jpg',
      'pics/devoid/au2.jpg',
      'pics/devoid/au3.jpg',
      'pics/devoid/au4.jpg',
      'pics/devoid/au5.jpg',
    ]
  },
  'running-in-circles': {
    title: 'Running in Circles Tour',
    photos: [
      'pics/roc/roc1.jpg',
      'pics/roc/roc2.jpg',
      'pics/roc/roc3.jpg',
      'pics/roc/roc4.jpg',
      'pics/roc/roc5.jpg',
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
      'pics/fandom/fandom1.jpg',
      'pics/fandom/fandom2.jpg',
      'pics/fandom/fandom3.jpg',
    ]
  },
  'iit-madras': {
    title: 'IIT Madras',
    photos: [
      'pics/iitm/iitm1.jpg',
      'pics/iitm/iitm2.jpg',
      'pics/iitm/iitm3.jpg',
      'pics/iitm/iitm4.jpg',
      'pics/iitm/iitm5.jpg',
    ]
  },
  'octavia': {
    title: 'Octavia — MCC',
    photos: [
      'pics/octavia/oct1.jpg',
      'pics/octavia/oct2.jpg',
      'pics/octavia/oct3.jpg',
      'pics/octavia/oct4.jpg',
      'pics/octavia/oct5.jpg',
    ]
  },
  'festember': {
    title: 'NIT Trichy Festember',
    photos: [
      'pics/festember/fest1.jpg',
      'pics/festember/fest2.jpg',
      'pics/festember/fest3.jpg',
      'pics/festember/fest4.jpg',
      'pics/festember/fest5.jpg',
    ]
  },
  'circle-of-love-nye': {
    title: 'Circle of Love NYE',
    photos: [
      'pics/nycol/nycol1.jpg',
      'pics/nycol/nycol2.jpg',
      'pics/nycol/nycol3.jpg',
    ]
  },
  'phoenix': {
    title: 'Phoenix Market City',
    photos: [
      'pics/phoenix/ph1.jpg',
      'pics/phoenix/ph2.jpg',
      'pics/phoenix/ph3.jpg',
      'pics/phoenix/ph4.jpg',
      'pics/phoenix/ph5.jpg',
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
  'black-orchid': {
    title: 'Black Orchid',
    photos: [
      'pics/blackorchid/bo1.jpg',
      'pics/blackorchid/bo2.JPG',
      'pics/blackorchid/bo3.JPG',
      'pics/blackorchid/bo4.jpg',
      'pics/blackorchid/bo5.jpg',
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

  document.querySelectorAll('.live-scroll-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });

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
  const lightbox = document.getElementById('lightbox');
  const lbImg    = lightbox.querySelector('.lightbox-img');

  document.querySelectorAll('.live-card').forEach(card => {
    card.addEventListener('click', () => {
      const key  = card.dataset.show;
      const data = showData[key];
      if (!data) return;

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

      const closeBtn = lightbox.querySelector('.lightbox-close');
      const prevBtn  = lightbox.querySelector('.lightbox-prev');
      const nextBtn  = lightbox.querySelector('.lightbox-next');

      const newClose = closeBtn.cloneNode(true);
      const newPrev  = prevBtn.cloneNode(true);
      const newNext  = nextBtn.cloneNode(true);
      closeBtn.replaceWith(newClose);
      prevBtn.replaceWith(newPrev);
      nextBtn.replaceWith(newNext);

      newClose.addEventListener('click', closeLightbox);
      newPrev.addEventListener('click',  () => show(currentIndex - 1));
      newNext.addEventListener('click',  () => show(currentIndex + 1));
      document.addEventListener('keydown', keyHandler);
      lightbox.addEventListener('click', backdropHandler);

      show(0);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelectorAll('.festival-gallery-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.festival;
      window.openFestivalGallery(key);
    });
  });
}

loadIncludes();

document.addEventListener('click', (e) => {
  const toggle   = document.getElementById('logoToggle');
  const dropdown = document.getElementById('logoDropdown');
  if (!toggle || !dropdown) return;

  if (toggle === e.target) {
    dropdown.classList.toggle('open');
  } else {
    dropdown.classList.remove('open');
  }
});
