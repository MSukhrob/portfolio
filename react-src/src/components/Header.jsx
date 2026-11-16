import { navLinks, COURSE_URL } from '../data'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#top">Sukhrob<span aria-hidden="true">.</span></a>
        <nav aria-label="Main navigation">
          {navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href={COURSE_URL}>Course tasks</a>
          <button className="theme-toggle" type="button" aria-pressed={theme === 'dark'} onClick={onToggleTheme}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
