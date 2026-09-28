const links = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'Projects', href: '/portfolio/', key: 'projects' },
  { label: 'About', href: '/#about', key: 'about' },
  { label: 'Contact', href: '/#contact', key: 'contact' },
]

export default function Navigation({ active }: { active?: 'home' | 'projects' }) {
  return (
    <header className="site-header">
      <nav className="nav-container container" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Yosefa Ferdianto, home">
          <span className="brand-logo">YF</span>
          <span className="brand-name">Yosefa Ferdianto</span>
        </a>
        <div className="nav-links nav-links-desktop">
          {links.map(({ label, href, key }) => (
            <a
              key={key}
              href={href}
              className={active === key ? 'nav-link is-active' : 'nav-link'}
              aria-current={active === key ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <details className="mobile-menu">
          <summary className="mobile-menu-toggle" aria-label="Navigation menu">
            <span className="mobile-menu-icon" aria-hidden="true"><span /><span /></span>
          </summary>
          <div className="mobile-menu-panel">
            {links.map(({ label, href, key }) => (
              <a
                key={key}
                href={href}
                className={active === key ? 'mobile-menu-link is-active' : 'mobile-menu-link'}
                aria-current={active === key ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  )
}
