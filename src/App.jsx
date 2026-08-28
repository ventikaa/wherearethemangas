import { useState, useEffect, useCallback } from 'react'
import { showData, festivalData } from './data/shows'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import NewRelease from './components/NewRelease'
import Bio from './components/Bio'
import QuickLinks from './components/QuickLinks'
import Discography from './components/Discography'
import Live from './components/Live'
import Merch from './components/Merch'
import UpcomingShows from './components/UpcomingShows'
import FreshFinds from './components/FreshFinds'
import Press from './components/Press'
import PhotoStrip from './components/PhotoStrip'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import BuriedAlive from './components/BuriedAlive'

import './styles/global.css'
import './styles/system.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/new-release.css'
import './styles/bio.css'
import './styles/discography.css'
import './styles/live.css'
import './styles/press.css'
import './styles/merch.css'
import './styles/photo-strip.css'
import './styles/footer.css'

const ticker2Items = ['WHERE ARE THE MANGAS', 'BOOK THE BAND', 'NEW MUSIC OUT NOW', "SLIDE INTO THE DM'S", 'CHENNAI // PHILADELPHIA']

export default function App() {
  const [lightbox, setLightbox] = useState(null)
  const [buriedAliveOpen, setBuriedAliveOpen] = useState(false)

  const openGallery = useCallback((key, type) => {
    const data = type === 'festival' ? festivalData[key] : showData[key]
    if (data) setLightbox({ photos: data.photos, startIndex: 0 })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <NewRelease />
      <Bio />
      <QuickLinks />
      <Discography onOpenBuriedAlive={() => setBuriedAliveOpen(true)} />
      <Live onOpenGallery={openGallery} />
      <div className="break-section2">
        <img src="/pics/breaks/break-section2.jpg" alt="" />
      </div>
      <Merch />
      <div className="break-section">
        <img src="/pics/breaks/break-section.jpg" alt="" />
      </div>
      <UpcomingShows />
      <FreshFinds />
      <Press />
      <PhotoStrip />
      <Ticker items={ticker2Items} />
      <Footer />

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}

      <BuriedAlive open={buriedAliveOpen} onClose={() => setBuriedAliveOpen(false)} />
    </>
  )
}
