import { skillGroups } from '../data'

function Skills() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills</h2>
        <div className="skill-groups">
          {skillGroups.map(g => (
            <article className="skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
