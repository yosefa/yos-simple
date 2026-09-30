'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export default function Hero({ children }: { children: ReactNode }) {
  const heroRef = useRef<HTMLElement>(null)
  const [showArrow, setShowArrow] = useState(false)
  const [showCodeIcon, setShowCodeIcon] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const content = hero?.querySelector<HTMLElement>('.hero-inner')
    const header = document.querySelector<HTMLElement>('.site-header')
    if (!hero || !content || !header) return

    const updateLayout = () => {
      hero.style.setProperty('--header-height', `${header.offsetHeight}px`)
      // Include the content's bottom padding when measuring the empty space.
      const bottomPadding = parseFloat(getComputedStyle(content).paddingBottom)
      const freeSpace = (hero.clientHeight - content.offsetHeight) / 2 + bottomPadding
      setShowArrow(freeSpace >= 76)

      // Measure above the text without adding height or shifting the content.
      const topPadding = parseFloat(getComputedStyle(content).paddingTop)
      const topSpace = (hero.clientHeight - content.offsetHeight) / 2 + topPadding
      const iconSize = Math.min(88, Math.max(64, hero.clientWidth * 0.065))
      hero.style.setProperty('--hero-code-size', `${iconSize}px`)
      hero.style.setProperty('--hero-code-top', `${(topSpace - iconSize) / 2}px`)
      setShowCodeIcon(topSpace >= iconSize + 48)
    }

    const observer = new ResizeObserver(updateLayout)
    observer.observe(hero)
    observer.observe(content)
    observer.observe(header)
    updateLayout()
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="hero" id="home" aria-labelledby="home-title">
      {showCodeIcon && (
        <div className="hero-code" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 22-10 10 10 10m28-20 10 10-10 10M38 12 26 52" />
          </svg>
        </div>
      )}
      {children}
      {showArrow && (
        <a className="hero-scroll" href="#projects" aria-label="Scroll to selected work">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v16m-6-6 6 6 6-6" />
          </svg>
        </a>
      )}
    </section>
  )
}
