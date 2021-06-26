import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

function SignedInNavLinks(props) {
  return (
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><NavLink to="/new">New Project</NavLink></li>
      <li onClick={props.signOut}>Log Out</li>
      <li><NavLink to="/" className='btn btn-floating pink lighten-1' >NN</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavLinks)