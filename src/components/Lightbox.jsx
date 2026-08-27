import { useState, useEffect, useCallback, useRef } from 'react'

export default function Lightbox({ photos, startIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const stripRef = useRef(null)

  const show = useCallback((index) => {
    setCurrentIndex((index + photos.length) % photos.length)
  }, [photos.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') show(currentIndex - 1)
      if (e.key === 'ArrowRight') show(currentIndex + 1)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [currentIndex, onClose, show])

  useEffect(() => {
    const thumb = stripRef.current?.children[currentIndex]
    if (thumb) thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [currentIndex])

  return (
    <div className="lightbox active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <button className="lightbox-prev" onClick={() => show(currentIndex - 1)}>←</button>
      <button className="lightbox-next" onClick={() => show(currentIndex + 1)}>→</button>
      <div className="lightbox-inner">
        <img className="lightbox-img" src={photos[currentIndex]} alt="" />
      </div>
      <div className="lightbox-filmstrip" ref={stripRef}>
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            className={`lightbox-filmstrip-thumb${i === currentIndex ? ' active' : ''}`}
            onClick={() => show(i)}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}
