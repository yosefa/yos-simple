import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return { title: `${project.title} | Yosefa Ferdianto`, description: project.description }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main>
      <Navigation active="projects" />
      <div className="container page-main detail-page">
        <a href="/portfolio/" className="back-link">← All projects</a>
        <header className="detail-hero">
          <div className="detail-hero-top">
            <span className="category-label">{project.category === 'professional' ? 'Professional project' : 'Personal project'}</span>
            <span className="detail-period">{project.period}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-description">{project.description}</p>
          <div className="detail-hero-bottom">
            <div className="tag-list" aria-label="Technologies">
              {project.tags.map((tag) => <span className="tag" key={tag.label}>{tag.label}</span>)}
            </div>
            {project.link && <a className="button button-primary" href={project.link} target="_blank" rel="noopener noreferrer">Visit project ↗</a>}
          </div>
        </header>

        <div className="detail-grid">
          <section className="detail-panel" aria-labelledby="features-title">
            <p className="eyebrow">The work</p>
            <h2 id="features-title">Key features</h2>
            <ul className="detail-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>
          {project.outcomes?.length ? (
            <section className="detail-panel" aria-labelledby="outcomes-title">
              <p className="eyebrow">The impact</p>
              <h2 id="outcomes-title">Results</h2>
              <ul className="detail-list">
                {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
            </section>
          ) : (
            <section className="detail-panel detail-connect" aria-labelledby="connect-title">
              <p className="eyebrow">Let&apos;s connect</p>
              <h2 id="connect-title">Interested in this work?</h2>
              <p>Happy to share more about the thinking behind this project.</p>
              <a className="text-link" href="https://linkedin.com/in/yosefaferdianto" target="_blank" rel="noopener noreferrer">Message on LinkedIn ↗</a>
            </section>
          )}
        </div>

        {(project.technicalDetails?.length || project.challenges?.length) && (
          <section className="detail-more" aria-label="More project details">
            {project.technicalDetails?.length ? (
              <details className="detail-disclosure">
                <summary>Technical approach <span aria-hidden="true">+</span></summary>
                <ul className="detail-list">{project.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </details>
            ) : null}
            {project.challenges?.length ? (
              <details className="detail-disclosure">
                <summary>Challenges <span aria-hidden="true">+</span></summary>
                <ul className="detail-list">{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
              </details>
            ) : null}
          </section>
        )}
        <div className="detail-end">
          <a className="text-link" href="/portfolio/">← Browse more projects</a>
          <a className="text-link" href="https://linkedin.com/in/yosefaferdianto" target="_blank" rel="noopener noreferrer">Discuss a project ↗</a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
