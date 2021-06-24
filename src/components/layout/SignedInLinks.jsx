import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInNavLinks() {
  return (
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><NavLink to="/new">New Project</NavLink></li>
      <li><NavLink to="/logout">Log Out</NavLink></li>
      <li><NavLink to="/logout" className='btn btn-floating pink lighten-1' >NN</NavLink></li>
    </ul>
  )
}
