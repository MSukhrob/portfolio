import { COURSE_URL, GITHUB_URL } from '../data'

function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="cta">
          <h2 id="contact-title">Want to see more?</h2>
          <p>All my course tasks are on my course page and the source code is on GitHub.</p>
          <div className="actions">
            <a className="btn btn-light" href={COURSE_URL}>Course page</a>
            <a className="btn btn-outline" href={GITHUB_URL}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
