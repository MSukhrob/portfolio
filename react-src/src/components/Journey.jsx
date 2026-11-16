import { journey } from '../data'

function Journey() {
  return (
    <section className="section alt" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <h2 id="journey-title">My learning journey</h2>
        <ol className="timeline">
          {journey.map(j => (
            <li key={j.when}><span className="when">{j.when}</span><h3>{j.title}</h3><p>{j.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Journey
