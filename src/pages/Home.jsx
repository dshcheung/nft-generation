import React from 'react'
import { Link } from 'react-router-dom'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <header className="text-center border-bottom">
        <h1>Home Page</h1>
        <div><Link to="/another">Another Page</Link></div>
      </header>
    </div>
  )
}

export default PagesHome
