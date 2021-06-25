import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInNavLinks() {
  return (
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><NavLink to="/signin">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )
}
