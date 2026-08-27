export default function NewRelease() {
  return (
    <>
      <section id="new-release">
        <div className="nr-inner">
          <header className="nr-head reveal">
            <div className="section-label">Latest Drop</div>
            <div className="nr-head-meta">SINGLE &nbsp;/&nbsp; 2025</div>
          </header>

          <div className="nr-grid">
            <div className="nr-art reveal">
              <span className="nr-art-tag">▶ NOW PLAYING</span>
              <img src="/pics/TTW.png" alt="Turn The Wheel" />
              <span className="nr-art-spine">TURN THE WHEEL</span>
            </div>

            <div className="nr-info reveal" style={{ transitionDelay: '.12s' }}>
              <h2 className="nr-title">TURN THE<br /><em>WHEEL</em></h2>
              <p className="nr-desc">
                'Turn The Wheel' is an alternative rock/punk track that confronts a collapsing world built on illusions, apathy, and silent obedience. It's loud, urgent, and unfiltered — a break from the stillness of Rewind and a plunge into rebellion. Where Rewind stood in the ruins of Heart Orbit's dreamscape, 'Turn The Wheel' lights a match to what remains.
              </p>
              <blockquote className="nr-pull">"What's the price of a future gone blind?"</blockquote>

              <div className="nr-links">
                <a className="nr-link spotify" href="https://open.spotify.com/album/5C4PYCTbqgsKbBSO2akfwq?si=3mHZQ5M1ScuqnGSXS1Nnsg" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a className="nr-link apple" href="https://music.apple.com/us/album/turn-the-wheel-single/1849191469" target="_blank" rel="noopener noreferrer">Apple Music</a>
                <a className="nr-link youtube" href="https://music.youtube.com/watch?v=ojR2IZFwtDk&si=3VjXTK4uXW1h9xAX" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}
