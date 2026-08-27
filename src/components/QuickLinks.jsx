export default function QuickLinks() {
  return (
    <section id="quick-links">
      <div className="ql-inner">
        <div className="ql-texture"></div>
        <h2 className="ql-heading reveal">QUICK LINKS</h2>
        <div className="ql-grid reveal">
          <a className="ql-card" href="https://drive.google.com/drive/u/0/folders/1W5BnaBg-voCX1AdA0LJDfTIYwiHp7DLW" target="_blank" rel="noopener noreferrer">
            <img src="/pics/quicklinks/bio.png" alt="Artist Bio" className="ql-icon-img" />
            <div className="ql-label">ARTIST BIO</div>
          </a>
          <a className="ql-card" href="https://drive.google.com/drive/u/0/folders/14L77WGy923M_6wGHf6HlZiRgUjLg-L4H" target="_blank" rel="noopener noreferrer">
            <img src="/pics/quicklinks/photos.png" alt="Photos and Videos" className="ql-icon-img" />
            <div className="ql-label">PHOTOS &amp; VIDEOS</div>
          </a>
          <a className="ql-card" href="https://drive.google.com/drive/u/0/folders/1W5BnaBg-voCX1AdA0LJDfTIYwiHp7DLW" target="_blank" rel="noopener noreferrer">
            <img src="/pics/quicklinks/techrider.png" alt="Tech Rider" className="ql-icon-img" />
            <div className="ql-label">TECH RIDER</div>
          </a>
          <a className="ql-card" href="#footer" onClick={(e) => { e.preventDefault(); document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <img src="/pics/quicklinks/contactinfo.png" alt="Contact Info" className="ql-icon-img" />
            <div className="ql-label">CONTACT INFO</div>
          </a>
        </div>
      </div>
    </section>
  )
}
