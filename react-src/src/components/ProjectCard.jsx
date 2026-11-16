function ProjectCard({ number, title, text, tags, demo, code }) {
  return (
    <article className="card">
      <span className="card-no" aria-hidden="true">{String(number).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul className="tags">{tags.map(t => <li key={t}>{t}</li>)}</ul>
      <div className="card-links">
        <a className="card-link" href={demo}>Live demo<span className="sr-only"> of {title}</span></a>
        <a className="card-link" href={code}>Code<span className="sr-only"> of {title}</span></a>
      </div>
    </article>
  )
}

export default ProjectCard
