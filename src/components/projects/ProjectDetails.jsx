import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function ProjectDetails(props) {
  const { project } = props
  return (
    <div className='container section project-details' >
      {
        project ?
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title} </span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4">
              <div>Posted by {project.authorFirstName + " " + project.authorLastName}</div>
              <div>21 min ago</div>
            </div>
          </div>
          : <div>Project loading...</div>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    { collection: 'projects' }
  ])
)(ProjectDetails)
