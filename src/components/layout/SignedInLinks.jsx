import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

function SignedInNavLinks(props) {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><NavLink to="/new">New Project</NavLink></li>
      <li> <NavLink to='#' onClick={props.signOut}> Log Out </NavLink></li>
      <li><NavLink to="/" className='btn btn-floating pink lighten-1' >{props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavLinks)