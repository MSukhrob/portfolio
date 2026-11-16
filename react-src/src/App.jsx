import { useEffect, useLayoutEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch (e) { /* storage can be blocked */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch (e) { /* ignore */ }
  }, [theme])

  // fade sections in as they scroll into view
  useLayoutEffect(() => {
    const items = [...document.querySelectorAll('.section h2, .facts, .skill-card, .timeline li, .cta, .section-intro')]
    document.documentElement.classList.add('js')
    items.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--i', i % 4)
    })
    const check = () => {
      items.forEach(el => {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add('in')
        }
      })
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main" tabIndex="-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
