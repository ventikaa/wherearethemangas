import { useState } from 'react'

const tabs = ['tshirts', 'stickers', 'accessories']
const tabLabels = { tshirts: 'T-SHIRTS', stickers: 'STICKERS', accessories: 'ACCESSORIES' }

const tshirts = [
  { name: 'BURIED ALIVE MAP TEE - MAROON', status: 'NEW DROP', images: ['/pics/merch/tees/buried-alive-maroon-front.jpeg', '/pics/merch/tees/buried-alive-maroon-back.jpeg'] },
  { name: 'BURIED ALIVE MAP TEE - BLACK', status: 'NEW DROP', images: ['/pics/merch/tees/buried-alive-black-front.jpeg', '/pics/merch/tees/buried-alive-black-back.jpeg'] },
  { name: 'RATED M TEE - BLACK', status: 'NEW DROP', images: ['/pics/merch/tees/rated-m-tee.jpeg'] },
  { name: 'MANGAS JUICEBOX TEE', status: 'SOLD OUT', images: ['/pics/merch/tees/JUICEBOX-TEE FRONT.jpeg', '/pics/merch/tees/JUICEBOX-TEE BACK.jpeg'] },
  { name: 'WATM TEE - BLACK', status: 'SOLD OUT', images: ['/pics/merch/tees/matm-tee-front.jpeg', '/pics/merch/tees/matm-tee-back.jpeg'] },
  { name: "WHERE'S MY SMILE TEE", status: 'SOLD OUT', images: ['/pics/merch/tees/DYP.jpeg'] },
  { name: 'STARCITY TEE - BLACK', status: 'SOLD OUT', images: ['/pics/merch/tees/starcity.png'] },
  { name: 'MANGAS SKULL TEE - BLACK', status: 'SOLD OUT', images: ['/pics/merch/tees/SKULL TEE FRONT.jpeg', '/pics/merch/tees/SKULL TEE BACK.jpeg'] },
]

const stickers = [
  { name: 'DREAMLAND STICKER', status: 'SOLD OUT', images: ['/pics/merch/stickers/dreamland1.png'] },
  { name: 'JUICEBOX STICKER', status: 'SOLD OUT', images: ['/pics/merch/stickers/juicebox.png'] },
  { name: 'MANGAS GUITAR STICKER', status: 'SOLD OUT', images: ['/pics/merch/stickers/mangas-guitar1.png'] },
  { name: 'MANGAS LOGO STICKER', status: 'SOLD OUT', images: ['/pics/merch/stickers/mangaslogo1.png'] },
  { name: 'NO MODERN LOVE STICKER SHEET', status: 'SOLD OUT', images: ['/pics/merch/stickers/nml-sticker sheet.png'] },
  { name: 'SKULL STICKER - WHITE', status: 'SOLD OUT', images: ['/pics/merch/stickers/Skull_White.png'] },
  { name: 'SKULL STICKER 1', status: 'SOLD OUT', images: ['/pics/merch/stickers/skull1.png'] },
  { name: 'SKULL STICKER 2', status: 'SOLD OUT', images: ['/pics/merch/stickers/skull2.png'] },
  { name: 'SPEAKER STICKER', status: 'SOLD OUT', images: ['/pics/merch/stickers/speaker1.png'] },
]

const accessories = [
  { name: 'GUITAR PICKS', status: 'COMING SOON', images: ['/pics/merch/acs/pic1.jpg'], comingSoon: true },
  { name: 'FRIENDSHIP BRACELETS', status: 'COMING SOON', images: ['/pics/merch/acs/pic2.jpg'], comingSoon: true },
]

const merchData = { tshirts, stickers, accessories }

function MerchCard({ item }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const hasMultiple = item.images.length > 1

  return (
    <div className={`merch-card reveal${item.comingSoon ? ' merch-coming-soon' : ''}`}>
      <div className="merch-slider">
        <div className="merch-slides" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {item.images.map((src, i) => <img key={i} src={src} alt={`${item.name} ${i + 1}`} />)}
        </div>
        {item.comingSoon && <div className="merch-coming-overlay"><span>COMING SOON</span></div>}
        {hasMultiple && (
          <div className="merch-dots">
            {item.images.map((_, i) => (
              <span
                key={i}
                className={`merch-dot${i === slideIndex ? ' active' : ''}`}
                data-idx={i}
                onClick={() => setSlideIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="merch-info">
        <div className="merch-name">{item.name}</div>
        <div className={`merch-sold${item.comingSoon ? ' merch-soon-text' : ''}`}>{item.status}</div>
      </div>
    </div>
  )
}

export default function Merch() {
  const [activeTab, setActiveTab] = useState('tshirts')

  return (
    <>
      <section id="merch">
        <div className="merch-inner">
          <div className="section-label reveal">Wear Mangas</div>
          <h2 className="about-heading reveal" style={{ marginBottom: 24 }}>MERCH</h2>
          <div className="merch-banner reveal">
            SLIDE INTO OUR DM'S TO ORDER &nbsp;&nbsp;
            <a href="https://www.instagram.com/where.are.the.mangas/" target="_blank" rel="noopener noreferrer" className="merch-banner-link">@WHERE.ARE.THE.MANGAS</a>
          </div>
          <div className="merch-tabs reveal">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`merch-tab${tab === activeTab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab} className={`merch-grid${tab === activeTab ? ' active' : ''}`} id={`tab-${tab}`}>
              {merchData[tab].map((item) => <MerchCard key={item.name} item={item} />)}
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}
