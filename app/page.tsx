import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

const featuredSlugs = ['integrated-erp-system', 'sap-transition-support', 'wytopup', 'okane']
const featuredProjects = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!)

export default function Home() {
  return (
    <main>
      <Navigation active="home" />
      <section className="hero" id="home" aria-labelledby="home-title">
        <div className="container hero-inner">
          <p className="eyebrow">Yosefa Ferdianto <span aria-hidden="true">/</span> Software Engineer</p>
          <h1 id="home-title">Making complex<br />work feel <span>simple.</span></h1>
          <p className="hero-copy">I build software and systems that help people get things done. From enterprise tools to everyday products.</p>
          <div className="intro-actions">
            <a className="button button-primary" href="/portfolio/">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">Problem Solver at Heart</p>
        </div>
      </section>

      <section className="work-section" id="projects" aria-labelledby="featured-title">
        <div className="container">
          <div className="section-heading featured-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="featured-title">Built for real life.</h2>
            </div>
            <a className="text-link" href="/portfolio/">View all {projects.length} projects <span aria-hidden="true">↗</span></a>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
          </div>
        </div>
      </section>

      <section className="container about-section" id="about" aria-labelledby="about-title">
        <div className="about-panel">
          <div>
            <p className="eyebrow">About me</p>
            <h2 id="about-title">Thoughtful technology, built around people.</h2>
          </div>
          <div className="about-content">
            <p>Since 2015, I&apos;ve worked across software development, ERP, Linux infrastructure, and IT operations. I enjoy connecting the technical details with what people actually need to get done.</p>
            <div className="about-facts">
              <span>ERP &amp; business applications</span>
              <span>Infrastructure &amp; security</span>
              <span>Bachelor of Information Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Let&apos;s make something useful.</h2>
          <p>Have a project, an idea, or an opportunity? I&apos;d like to hear about it.</p>
        </div>
        <div className="contact-links">
          <a className="button button-primary" href="https://linkedin.com/in/yosefaferdianto" target="_blank" rel="noopener noreferrer">Message on LinkedIn <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="https://github.com/yosefa" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
