import { stats, GITHUB_URL } from '../data'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Computer Science student · Gachon University</p>
          <h1 id="hero-title">Hi, I am Sukhrob.<br />I build clean, accessible web pages.</h1>
          <p className="lead">I turn every lesson into a small working project, from semantic HTML to API-powered apps and React components that score 100 in Lighthouse.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#projects">View my projects</a>
            <a className="btn btn-ghost" href={GITHUB_URL}>GitHub profile</a>
          </div>
          <ul className="stats" aria-label="Quick facts">
            {stats.map(s => <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>)}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <img src="assets/avatar.svg" width="160" height="160" alt="Graduation cap icon representing Sukhrob" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
