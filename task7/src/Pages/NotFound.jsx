import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>404 Page Not Found</h1>
      <Link to="/">Home</Link>
    </React.Fragment>
  )
}

export default NotFound