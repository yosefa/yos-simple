import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects | Yosefa Ferdianto',
  description: 'Selected professional and personal projects by Yosefa Ferdianto.',
}

export default function PortfolioPage() {
  return (
    <main>
      <Navigation active="projects" />
      <div className="container page-main">
        <header className="page-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1>Work, built to be useful.</h1>
            <p>Enterprise systems, infrastructure, automation, and products I&apos;ve built along the way.</p>
          </div>
          <span className="page-count">{projects.length} projects</span>
        </header>
        <section className="portfolio-grid" aria-label="All projects">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </section>
      </div>
      <Footer />
    </main>
  )
}
