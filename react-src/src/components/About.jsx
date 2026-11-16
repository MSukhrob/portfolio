import { facts } from '../data'

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container two-col">
        <div>
          <h2 id="about-title">About me</h2>
          <p>I study computer science at Gachon University. In the Web Programming course I learned how a page is built layer by layer: structure with HTML, design with CSS, behaviour with JavaScript and now interfaces made of React components.</p>
          <p>I care about the details that make a site good for everyone: readable text, keyboard navigation, helpful error messages and fast loading. Every course task is published on my <a href="https://msukhrob.github.io/web-programming/">course page</a>.</p>
        </div>
        <dl className="facts">
          {facts.map(f => <div key={f.term}><dt>{f.term}</dt><dd>{f.detail}</dd></div>)}
        </dl>
      </div>
    </section>
  )
}

export default About
