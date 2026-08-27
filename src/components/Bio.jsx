import { useState } from 'react'

const slides = [
  { src: '/pics/DSC_6389.jpg', alt: 'MANGAS — live' },
  { src: '/pics/bio-photo2.jpg', alt: 'MANGAS — live' },
  { src: '/pics/bio-photo3.JPG', alt: 'MANGAS — studio' },
]

export default function Bio() {
  const [current, setCurrent] = useState(0)

  function goTo(index) {
    setCurrent((index + slides.length) % slides.length)
  }

  return (
    <>
      <section id="about">
        <div className="about-grid">
          <div className="about-left reveal">
            <div className="section-label">Who Am I</div>
            <h2 className="about-heading">MANGAS</h2>
            <p className="about-text">
              MANGAS is the project of <strong>Aditya Rao</strong> — a punk / alternative rock act originally from <strong>Chennai, India</strong>, now entering a new creative chapter in <strong>Philadelphia</strong>.
            </p>
            <p className="about-text">
              The name comes from the Tamil word — <strong>மாங்காய்</strong> — raw mango. Unexpected. Unfinished. Still evolving.
            </p>
            <p className="about-text">
              Blending <strong>hardcore energy, alternative rock, noisy textures, surreal storytelling, and emotionally driven songwriting,</strong> MANGAS explores surrealism, identity, modern exhaustion, illusion, nostalgia, chaos, and reinvention. What began years ago as dreamy indie pop and experimental rock has since mutated into something louder, darker, more restless, and deeply personal.
            </p>
            <p className="about-text">
              Beyond the solo project, Aditya has spent years performing across India as a drummer, producer, and collaborator — appearing at <strong>VH1 Supersonic</strong> and <strong>Magnetic Fields</strong> while working across indie rock/pop, hip-hop, funk, jazz and alternative music.
            </p>
          </div>

          <div className="about-right reveal" style={{ transitionDelay: '.15s' }}>
            <div className="bio-carousel">
              <div className="carousel-track">
                {slides.map((slide, i) => (
                  <div key={i} className={`carousel-slide${i === current ? ' active' : ''}`}>
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                ))}
              </div>
              <button className="carousel-btn prev" aria-label="Previous" onClick={() => goTo(current - 1)}>←</button>
              <button className="carousel-btn next" aria-label="Next" onClick={() => goTo(current + 1)}>→</button>
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot${i === current ? ' active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}
