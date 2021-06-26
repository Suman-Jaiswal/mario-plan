import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {
        projects && projects.map(project => {
          return (
            <Link key={project.id} to={'/project/' + project.id} >
              <ProjectSummary  project={project} />
            </Link>
          )
        })
      }
    </div>
  )
}
