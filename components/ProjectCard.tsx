import type { Project } from '@/data/projects'

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-top">
        <span className="category-label">{project.category === 'professional' ? 'Professional' : 'Personal'}</span>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
      <div>
        <h3><a href={`/projects/${project.slug}/`}>{project.title}</a></h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-card-bottom">
        <div className="tag-list" aria-label="Technologies">
          {project.tags.slice(0, featured ? 2 : 3).map((tag) => <span className="tag" key={tag.label}>{tag.label}</span>)}
        </div>
        {project.link && <a className="project-external" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>Visit ↗</a>}
      </div>
    </article>
  )
}
