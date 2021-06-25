import React from 'react'

export default function ProjectSummary({project}) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>posted by {project.authorFirstName + " " + project.authorLastName}</p>
        <p className="grey-text"> 21 min ago</p>
      </div>
    </div>
  )
}
