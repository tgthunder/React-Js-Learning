import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="text-center">
        <Link to="/"><li>Home</li></Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/user"><li>User</li></Link>
    </nav>
  )
}
