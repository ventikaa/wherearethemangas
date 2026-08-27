export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-logo-wrap">
        <a href="#home">
          <img src="/pics/mangas-logo.png" alt="MANGAS" className="nav-logo" />
        </a>
      </div>
      <div className="nav-links">
        <li><a href="#new-release">New</a></li>
        <li><a href="#quick-links">Links</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#music">Discog</a></li>
        <li><a href="#merch">Merch</a></li>
        <li><a href="#live">Live</a></li>
        <li><a href="#upcoming-shows">Upcoming</a></li>
        <li><a href="#press">Press</a></li>
      </div>
      <a href="https://open.spotify.com/artist/3xpV44ewszylvOYp1cDkGC" target="_blank" rel="noopener noreferrer" className="nav-listen-btn">LISTEN →</a>
    </nav>
  )
}
