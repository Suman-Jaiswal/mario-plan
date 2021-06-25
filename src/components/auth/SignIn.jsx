import React, { Component } from 'react'

export default class SignIn extends Component {
  state = {
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
    
  }

  render() {
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
          </div>
        </form>
      </div>
    )
  }
}
