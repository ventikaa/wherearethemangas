export default function Ticker({ items }) {
  return (
    <div className="wm-ticker" aria-hidden="true">
      <div className="wm-ticker-track">
        {items.map((text, i) => <span key={i}>{text}</span>)}
        {items.map((text, i) => <span key={`dup-${i}`}>{text}</span>)}
      </div>
    </div>
  )
}
