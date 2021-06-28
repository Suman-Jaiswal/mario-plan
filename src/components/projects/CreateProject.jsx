import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  
  handleChange =(e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  
  handleSubmit =(e) => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/');
  }

  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to ='/signin' />

    return (
      <div className='container' >
        <form action="" onSubmit={this.handleSubmit} className="white">
          <h5 className='grey-text text-darken-3' >Create New Project</h5>
          <br />
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" className='materialize-textarea' value={this.state.content} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)