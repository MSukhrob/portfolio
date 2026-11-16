import { useState } from 'react'
import { projects } from '../data'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'

const tags = ['All', ...new Set(projects.flatMap(p => p.tags))]

function Projects() {
  const [tag, setTag] = useState('All')
  const [query, setQuery] = useState('')

  const shown = projects.filter(p =>
    (tag === 'All' || p.tags.includes(tag)) &&
    (p.title + ' ' + p.text).toLowerCase().includes(query.trim().toLowerCase())
  )

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <p className="section-intro">Filter by technology or search by name. Every project is live and open source.</p>
        <div className="project-tools">
          <FilterBar options={tags} active={tag} onChange={setTag} />
          <label className="search">
            <span className="sr-only">Search projects</span>
            <input type="search" placeholder="Search projects" value={query} onChange={e => setQuery(e.target.value)} />
          </label>
        </div>
        <p className="result-count" role="status">{shown.length} of {projects.length} projects</p>
        {shown.length === 0
          ? <p>No projects match. Try another filter.</p>
          : <div className="cards">{shown.map((p, i) => <ProjectCard key={p.id} number={i + 1} {...p} />)}</div>}
      </div>
    </section>
  )
}

export default Projects
