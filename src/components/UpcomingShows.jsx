import { useState, useEffect } from 'react'

const BANDSINTOWN_URL = 'https://rest.bandsintown.com/artists/id_15641251/events?app_id=61964b5ab266d5c4a4dc518417927410&date=upcoming'

export default function UpcomingShows() {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    fetch(BANDSINTOWN_URL)
      .then((r) => r.json())
      .then((data) => setEvents(Array.isArray(data) ? data : []))
      .catch(() => setEvents([]))
  }, [])

  return (
    <section id="upcoming-shows">
      <div className="upcoming-inner">
        <div className="section-label reveal">Upcoming</div>
        <h2 className="about-heading reveal" style={{ marginBottom: 48 }}>UPCOMING SHOWS</h2>
        <div id="bit-events" className="bit-events-container reveal">
          {events === null ? (
            <div className="bit-loading">Loading shows...</div>
          ) : events.length === 0 ? (
            <div className="bit-no-shows">No upcoming shows — follow for updates.</div>
          ) : (
            events.map((e, i) => {
              const date = new Date(e.datetime)
              const day = date.toLocaleDateString('en-US', { day: '2-digit' })
              const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
              const year = date.getFullYear()
              return (
                <a key={i} className="bit-event" href={e.url} target="_blank" rel="noopener noreferrer">
                  <div className="bit-poster">
                    <img src="/pics/brutalcarnage.jpg" alt="Show poster" />
                  </div>
                  <div className="bit-event-info">
                    <div className="bit-date">
                      <span className="bit-day">{day}</span>
                      <span className="bit-month">{month}</span>
                      <span className="bit-year">{year}</span>
                    </div>
                    <div className="bit-details">
                      <div className="bit-venue">{e.venue.name}</div>
                      <div className="bit-location">{e.venue.city}, {e.venue.country}</div>
                      {e.offers && e.offers.length > 0 && (
                        <div className="bit-tickets">GET TICKETS →</div>
                      )}
                    </div>
                  </div>
                </a>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
