import React, { Component } from 'react'
import { signIn } from '../../store/actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  
  handleChange =(e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  handleSubmit =(e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    const {authError, auth} = this.props
    if(auth.uid) return <Redirect to ='/' />

    return (
      <div className='container' >
        <form action="" onSubmit={this.handleSubmit} className="white">
          <h5 className='grey-text text-darken-3' >Sign In</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} required/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)