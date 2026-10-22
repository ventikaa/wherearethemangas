export default function Discography({ onOpenBuriedAlive }) {
  return (
    <>
      <section id="music">
        <h2 className="about-heading reveal" style={{ marginBottom: 48 }}>DISCOGRAPHY</h2>

        {/* BURIED ALIVE ALBUM */}
        <div className="ba-block reveal" style={{ marginBottom: 40 }}>
          <div className="ba-cover">
            <img src="/pics/previewmaybe album.png" alt="Buried Alive" onClick={onOpenBuriedAlive} style={{ cursor: 'pointer' }} />
          </div>
          <div className="ba-content">
            <div className="ba-header">
              <h2 className="ba-title">BURIED ALIVE</h2>
              <div className="ba-meta">ALBUM &nbsp;·&nbsp; MMXXVI</div>
            </div>
            <div className="ba-tracklist">
              {[
                '???',
                "WHERE'S MY SMILE",
                '???',
                '???',
                'Pretending',
                '???',
                'SOMETIMES IT FEELS LIKE THIS',
                'Punkcity',
              ].map((name, i) => (
                <div className="ba-track" key={i}>
                  <span className="ba-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ba-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SINGLES */}
        <div className="singles-header reveal">
          <span className="singles-label">SINGLES</span>
          <div className="singles-line"></div>
        </div>

        <div className="singles-grid reveal">
          {[
            { img: '/pics/TTW.png', title: 'Turn The Wheel', meta: 'SINGLE · 2025', href: 'https://open.spotify.com/track/0QSu3nZ9OQWVaDzXBarDxk?si=ae3776c2242c4290' },
            { img: '/pics/Rewind Artwork.png', title: 'Rewind', meta: 'SINGLE · 2025', href: 'https://open.spotify.com/track/2MVD8TfDihIp5xD7eeftIF?si=1373aa211a59405d' },
            { img: '/pics/PrisonSong_Artwork.png', title: 'Prison Song', meta: 'SINGLE · 2025', href: 'https://open.spotify.com/track/0CiDbhN87ler13FN6HMF8Q?si=cf86df8baa694d06' },
          ].map((s) => (
            <div className="single-card" key={s.title}>
              <div className="single-art"><img src={s.img} alt={s.title} /></div>
              <div className="single-body">
                <div className="single-title">{s.title}</div>
                <div className="single-meta">{s.meta}</div>
                <a className="single-arrow" href={s.href} target="_blank" rel="noopener noreferrer">→</a>
              </div>
            </div>
          ))}
        </div>

        {/* HEART ORBIT EP */}
        <div className="ep-block reveal" style={{ marginTop: 40 }}>
          <div className="ba-cover">
            <img src="/pics/Heart.Orbit EP.jpg" alt="Heart Orbit EP" />
          </div>
          <div className="ba-content">
            <div className="ba-header">
              <h2 className="ba-title" style={{ fontSize: 'clamp(32px,4vw,56px)' }}>HEART ORBIT</h2>
              <div className="ba-meta">EP &nbsp;·&nbsp; 2021–2025</div>
            </div>
            <div className="ep-subtitle">A SIX-TRACK JOURNEY THROUGH HEARTBREAK, DREAMS, AND THE SPACES IN BETWEEN.</div>
            <div className="ep-tracks">
              {[
                { img: '/pics/Shattered Reflection.jpg', name: 'Shattered Reflection', fb: 'SR', href: 'https://open.spotify.com/track/3tsljO0oHRxrHvsVppNJsk?si=e3e70776c7274a2f' },
                { img: '/pics/Starcity Cover.png', name: 'Starcity', fb: 'SC', href: 'https://open.spotify.com/track/43K3UQ3wjGRhZrf2EQ1t21?si=1cc183b7fdd64f5b' },
                { img: '/pics/Heartache With A Dream Cover.png', name: 'Heartache With A Dream', fb: 'HWD', href: 'https://open.spotify.com/track/3UOMigyOD3zvPW8bdZ5HZC?si=4f87fbcf126d4487' },
                { img: '/pics/Marshmallow in My Eye.png', name: 'Marshmallow in My Eye', fb: 'MME', href: 'https://open.spotify.com/track/3ZiBIhbtTe0dzrc0nOE401?si=dc5f8e4c8a3044cf' },
                { img: '/pics/No Modern Love for Me.jpg', name: 'No Modern Love For Me', fb: 'NML', href: 'https://open.spotify.com/track/4e7LNGMJQtSZJfvgtfwbrb?si=ea88e15fb2804f1d' },
                { img: '/pics/mangas dreamland.png', name: 'Dreamland', fb: 'DL', href: 'https://open.spotify.com/track/2UKmADjXZbMO0LxilYdSuS?si=88424316a81c4404' },
              ].map((t) => (
                <div className="ep-track" key={t.name}>
                  <img src={t.img} alt={t.name} />
                  <div className="ep-track-fallback">{t.fb}</div>
                  <span className="ep-track-name">{t.name}</span>
                  <a className="release-link" href={t.href} target="_blank" rel="noopener noreferrer">→</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}
