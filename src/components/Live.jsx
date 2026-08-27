import { useEffect, useRef } from 'react'

const row1Shows = [
  { key: 'summer-bang', img: '/pics/houseparty1.jpeg', alt: 'Summer Bang House Party', outlet: 'House Party', title: 'Summer Bang House Party', meta: 'Chennai' },
  { key: 'turn-up-devoid', img: '/pics/devoid/au3.jpg', alt: 'Turn Up for Devoid', outlet: 'Show', title: 'Turn Up for Devoid', meta: 'Chennai' },
  { key: 'running-in-circles', img: '/pics/roc/roc2.jpg', alt: 'Running in Circles Tour', outlet: 'Tour', title: 'Running in Circles Tour', meta: '2025' },
  { key: 'black-orchid', img: '/pics/blackorchidfinalfinal/IMG_9460.jpeg', alt: 'Black Orchid', outlet: 'Show', title: 'Black Orchid', meta: 'Chennai' },
  { key: 'bangalore-bychance', img: '/pics/bb/DSC_7895.jpg', alt: 'Bangalore Bychance', outlet: 'Show', title: 'Bangalore Bychance', meta: 'Bangalore' },
  { key: 'fandom', img: '/pics/fandom/fandom2.jpg', alt: 'Fandom', outlet: 'Show', title: 'Fandom', meta: 'Chennai' },
  { key: 'gears', img: '/pics/gg/img004.jpg', alt: 'Gears & Garage', outlet: 'Show', title: 'Gears & Garage', meta: 'Chennai' },
  { key: 'iit-madras', img: '/pics/iitm/iitm1.jpg', alt: 'IIT Madras', outlet: 'Show', title: 'IIT Madras', meta: 'Chennai' },
  { key: 'amplify', img: '/pics/goa amplify/GAR - 0253.JPEG', alt: 'Hideaway', outlet: 'Show', title: 'Hideaway', meta: 'Goa' },
  { key: 'octavia', img: '/pics/octavia/oct3.jpg', alt: 'Octavia MCC', outlet: 'Show', title: 'Octavia — MCC', meta: 'Chennai' },
  { key: 'festember', img: '/pics/festember/fest2.jpg', alt: 'NIT Trichy Festember', outlet: 'Festival', title: 'NIT Trichy Festember', meta: 'Trichy' },
]

const row2Shows = [
  { key: 'circle-of-love-nye', img: '/pics/nycol/nycol1.jpg', alt: 'Circle of Love NYE', outlet: 'Festival', title: 'Circle of Love NYE', meta: 'Chennai' },
  { key: 'phoenix', img: '/pics/phoenix/ph4.jpg', alt: 'Phoenix Market City', outlet: 'Show', title: 'Phoenix Market City', meta: 'Chennai' },
  { key: 'summer-bang-3', img: '/pics/sb3/Band 2 @ 24.jpg', alt: 'Summer Bang Chapter 3', outlet: 'First Show', title: 'Summer Bang Chapter 3', meta: 'Chennai' },
  { key: 'the-park', img: '/pics/The Park Anniversary/Park7.jpg', alt: 'The Park Hotel', outlet: 'Show', title: 'The Park Hotel', meta: 'Chennai' },
  { key: 'pondi', img: '/pics/Catamaran/SHA_3397.jpg', alt: 'Catamaran Brewing Co', outlet: 'Show', title: 'Catamaran Brewing Co', meta: 'Pondicherry' },
  { key: 'circle-of-love-nye', img: '/pics/nycol/nycol2.jpg', alt: 'Circle of Love NYE 2', outlet: 'Festival', title: 'Circle of Love NYE', meta: 'Chennai' },
  { key: 'republik', img: '/pics/Republik/DSC01180.jpg', alt: 'Republik', outlet: 'Show', title: 'Republik', meta: 'Chennai' },
  { key: 'bonobo', img: '/pics/bonobo/3.png', alt: 'Bonobo', outlet: 'Show', title: 'BONOBO', meta: 'Mumbai' },
  { key: 'somad', img: '/pics/SOMAD solo/2A5A4227.jpg', alt: 'SOMAD solo', outlet: 'Show', title: 'SOMAD Social Select', meta: 'Chennai' },
  { key: 'running-in-circles', img: '/pics/roc/roc4.jpg', alt: 'Running in Circles', outlet: 'Tour', title: 'Running in Circles Tour', meta: '2025' },
]

function LiveCard({ show, onClick }) {
  return (
    <div className="live-card" data-show={show.key} onClick={() => onClick(show.key)}>
      <div className="live-img-wrap">
        <img src={show.img} alt={show.alt} />
      </div>
      <div className="live-body">
        <div className="live-outlet">{show.outlet}</div>
        <div className="live-title">{show.title}</div>
        <div className="live-meta">{show.meta}</div>
        <span className="live-arrow">→</span>
      </div>
    </div>
  )
}

export default function Live({ onOpenGallery }) {
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  useEffect(() => {
    [row1Ref, row2Ref].forEach((ref) => {
      const track = ref.current
      if (track) track.innerHTML += track.innerHTML
    })
  }, [])

  return (
    <>
      <section id="live">
        <div className="live-inner">
          <div className="section-label reveal">Main Stage</div>
          <h2 className="about-heading reveal" style={{ marginBottom: 48 }}>FESTIVALS</h2>

          <div className="festival-grid">
            {[
              { key: 'circle-of-love-2023', img: '/pics/Circle Of Love Fest.png', title: 'Circle of Love', meta: 'Chennai · 2023' },
              { key: 'covelong-2023', img: '/pics/Covelong Surf Fest.png', title: 'Surf Turf Covelong', meta: 'Chennai · 2023' },
            ].map((fest, i) => (
              <div className="festival-tile reveal" key={fest.key} style={i > 0 ? { transitionDelay: '.1s' } : undefined}>
                <div className="festival-tile-img" onClick={() => onOpenGallery(fest.key, 'festival')}>
                  <img src={fest.img} alt={fest.title} />
                </div>
                <div className="festival-tile-body">
                  <div className="festival-tile-label">Festival</div>
                  <div className="festival-tile-title">{fest.title}</div>
                  <div className="festival-tile-meta">{fest.meta}</div>
                  <button className="festival-gallery-btn" onClick={(e) => { e.stopPropagation(); onOpenGallery(fest.key, 'festival') }}>+ View Gallery</button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-label reveal" style={{ marginTop: 'clamp(80px,12vh,140px)' }}>On Stage</div>
          <h2 className="about-heading reveal" style={{ marginBottom: 48 }}>LIVE SHOWS</h2>

          <div className="live-scroll-wrap">
            <div className="live-scroll-row" id="liveRow1">
              <div className="live-scroll-track" ref={row1Ref}>
                {row1Shows.map((show, i) => (
                  <LiveCard key={`${show.key}-${i}`} show={show} onClick={(key) => onOpenGallery(key, 'show')} />
                ))}
              </div>
            </div>

            <div className="live-scroll-row reverse" id="liveRow2">
              <div className="live-scroll-track" ref={row2Ref}>
                {row2Shows.map((show, i) => (
                  <LiveCard key={`${show.key}-${i}`} show={show} onClick={(key) => onOpenGallery(key, 'show')} />
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
