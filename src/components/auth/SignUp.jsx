import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { signUp } from '../../store/actions/authAction'

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  
  handleChange =(e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
    console.log(e.target)
  }
  handleSubmit =(e) => {
    e.preventDefault()
    this.props.signUp(this.state)
    
  }

  render() {
    const { auth, authError } = this.props
    if(auth.uid) return <Redirect to ='/' />

    return (
      <div className='container' >
        <form action="" onSubmit={this.handleSubmit} className="white">
          <h5 className='grey-text text-darken-3' >Sign Up</h5>
          <br />
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)