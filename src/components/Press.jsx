export default function Press() {
  return (
    <>
      <section id="press">
        <div className="press-inner">
          <div className="press-header reveal">
            <div className="press-header-left">
              <h2 className="press-heading">PRESS</h2>
            </div>
            <div className="press-header-right"></div>
          </div>

          <a className="press-feat-card reveal" href="https://rollingstoneindia.com/hear-mangas-new-retro-indie-pop-track-starcity/" target="_blank" rel="noopener noreferrer">
            <div className="press-feat-num">01</div>
            <div className="press-feat-content">
              <img src="/pics/RollingStoneIndia.png" alt="Rolling Stone India" className="press-logo" />
              <div className="press-feat-date">MAR 2022</div>
              <div className="press-feat-title">HEAR MANGAS' NEW RETRO INDIE-POP TRACK 'STARCITY'</div>
              <blockquote className="press-feat-quote">"I have a ton of content coming out soon in the next couple of weeks and I think it's easily my best work to date. I can't wait for y'all to hear it."</blockquote>
              <div className="press-read">READ ARTICLE ↗</div>
            </div>
            <div className="press-feat-img">
              <img src="/pics/rolling-stone-cover.jpg" alt="Rolling Stone Feature" />
            </div>
          </a>

          <div className="press-secondary reveal">
            {[
              {
                num: '02', type: 'INTERVIEW', title: 'INTERVIEW: ADITYA RAO',
                quote: '"Aditya\'s vocals are sensual and mysterious and carry a philosophical message. Simplicity is the key to talent."',
                href: 'https://www.indiemusicdiscovery.com/interview-aditya-rao/',
                logo: '/pics/IndieMusicDiscovery.png', logoAlt: 'Indie Music Discovery',
                logoStyle: { filter: 'grayscale(1)' },
              },
              {
                num: '03', type: 'FEATURE', date: 'JUN 2021', title: 'ADITYA RAO UNVEILS DREAMY DEBUT SINGLE',
                quote: '"A wonderfully dreamy indie rock sound that will take you as a listener to a faraway place — a really successful indie production."',
                href: 'https://www.musicistoblame.co.uk/2021/06/aditya-rao-unveils-dreamy-debut-single.html',
                logo: '/pics/MusicistoBlame.png', logoAlt: 'Music Is To Blame',
              },
              {
                num: '04', type: 'FEATURE', title: 'NEW MUSIC FEATURE: MANGAS',
                quote: '"Aditya Rao is no stranger to musicianship — wonderful harmonies and an authentic sound."',
                href: 'https://indiedockmusicblog.co.uk/?p=2591',
                logo: '/pics/IndieDockMusicBlog.png', logoAlt: 'Indie Dock Music Blog',
                logoStyle: { filter: 'grayscale(1)' },
              },
              {
                num: '05', type: 'FEATURE', title: 'ADITYA RAO - SHATTERED REFLECTION',
                quote: '"The diverse sonic textures lend the song not only a touch of ambient but also a lovely hint of nostalgia."',
                href: 'https://www.berlinonair.cc/post/654070047647711232/aditya-rao-shattered-reflection-indie-rock',
                logo: '/pics/BerlinOnAir.png', logoAlt: 'Berlin On Air',
                logoStyle: { filter: 'grayscale(1)' },
              },
            ].map((item) => (
              <a key={item.num} className="press-sec-card" href={item.href} target="_blank" rel="noopener noreferrer">
                <div className="press-sec-img">
                  <img src={item.logo} alt={item.logoAlt} className="press-logo-sec" style={item.logoStyle} />
                </div>
                <div className="press-sec-body">
                  <div className="press-sec-meta">
                    <span className="press-sec-num">{item.num}</span>
                    <span className="press-sec-type">{item.type}</span>
                  </div>
                  {item.date && <div className="press-sec-date">{item.date}</div>}
                  <div className="press-sec-title">{item.title}</div>
                  <blockquote className="press-sec-quote">{item.quote}</blockquote>
                  <div className="press-read">READ ARTICLE ↗</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}
