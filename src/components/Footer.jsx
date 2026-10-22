export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-rating-col">
            <img src="/pics/Rating Image M.png" alt="Content Rated M" className="footer-rating" />
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Social Links</div>
            <div className="footer-links">
              <a href="https://open.spotify.com/artist/3xpV44ewszylvOYp1cDkGC" target="_blank" rel="noopener noreferrer">Spotify</a>
              <a href="https://www.instagram.com/where.are.the.mangas/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://music.apple.com/us/artist/mangas/1597759445" target="_blank" rel="noopener noreferrer">Apple Music</a>
              <a href="https://www.youtube.com/@wherearethemangas" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
          <div className="footer-skull-col">
            <img src="/pics/footer.png" alt="MANGAS" className="footer-skull" />
          </div>
          <div className="footer-col">
            <div className="footer-col-label">Bookings &amp; Contact</div>
            <div className="footer-booking">
              <p className="booking-region">USA</p>
              <p className="booking-name">Aditya Rao</p>
              <a href="tel:+12065498192" className="booking-detail">+1 (206) 549-8192</a>
              <a href="mailto:wherearethemangas@gmail.com" className="booking-detail">wherearethemangas@gmail.com</a>
            </div>
            <div className="footer-booking">
              <p className="booking-region">India</p>
              <p className="booking-name">Srikanth Natarajan</p>
              <a href="tel:+919176301251" className="booking-detail">+91 91763 01251</a>
              <a href="mailto:thechennaiscene@gmail.com" className="booking-detail">thechennaiscene@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 MANGAS (ADITYA RAO) · CHENNAI / PHILADELPHIA</span>
        </div>
      </div>
    </footer>
  )
}
