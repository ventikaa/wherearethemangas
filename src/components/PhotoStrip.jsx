const photos = [
  { src: '/pics/live-1.jpg', alt: 'Live performance' },
  { src: '/pics/DSC_6335.jpg', alt: 'On stage' },
  { src: '/pics/live-3.jpg', alt: 'Studio' },
  { src: '/pics/2A5A1799.jpg', alt: 'VH1 Supersonic' },
  { src: '/pics/GAR - 0253.JPEG', alt: 'Live' },
  { src: '/pics/2A5A0869.jpg', alt: 'Live' },
  { src: '/pics/live-7.jpg', alt: 'Live' },
  { src: '/pics/DSC_6459.jpg', alt: 'Live' },
  { src: '/pics/SDK_6472.jpg', alt: 'Live' },
]

export default function PhotoStrip() {
  return (
    <div className="photo-strip">
      {photos.map((photo) => (
        <div key={photo.src} className="photo-strip-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}
