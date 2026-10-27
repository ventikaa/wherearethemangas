const applePlaylists = [
  { img: '/pics/playlists/new-music-daily.jpg', name: 'New Music Daily' },
  { img: '/pics/playlists/new-in-rock.jpg', name: 'New in Rock' },
  { img: '/pics/playlists/new-in-alternative.jpg', name: 'New in Alternative' },
  { img: '/pics/playlists/breaking-indian-independent.jpg', name: 'Breaking Indian Independent' },
  { img: '/pics/playlists/indian-rock-hits.jpg', name: 'Indian Rock Hits' },
]

export default function FreshFinds() {
  return (
    <section id="fresh-finds">
      <div className="ff-bg"></div>
      <div className="ff-inner">
        <div className="section-label reveal">Playlists</div>
        <h2 className="about-heading reveal" style={{ marginBottom: 48 }}>FEATURED IN</h2>

        <div className="ff-grid ff-spotlight reveal">
          <div className="ff-left">
            <span className="ff-badge">Spotify Editorial</span>
            <img src="/pics/Updated Starcity Playlist.png" alt="Starcity — Spotify Fresh Finds India" />
          </div>
          <div className="ff-right">
            <h3 className="ff-heading">
              <strong>Starcity</strong> was featured on Spotify's <strong>Fresh Finds India</strong>
            </h3>
            <p className="ff-sub">
              One of Spotify's most coveted editorial playlists for emerging artists — reserved for tracks that define what's next in Indian independent music.
            </p>
            <a className="ff-link nav-listen-btn" href="https://open.spotify.com/track/43K3UQ3wjGRhZrf2EQ1t21?si=55b194b95c0a4bc5" target="_blank" rel="noopener noreferrer">
              LISTEN ON SPOTIFY →
            </a>
          </div>
        </div>

        <div className="ff-more reveal">
          <div className="ff-more-label">Also on Apple Music</div>
          <div className="ff-playlists">
            {applePlaylists.map((p) => (
              <div className="ff-playlist" key={p.name}>
                <img src={p.img} alt={`${p.name} — Apple Music`} />
                <div className="ff-playlist-name">{p.name}</div>
                <div className="ff-playlist-meta">Apple Music</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
