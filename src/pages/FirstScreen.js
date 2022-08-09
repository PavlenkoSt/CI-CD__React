import React from 'react'
import { Link } from "react-router-dom";

import logo from '../logo.svg'

const FirstScreen = () => {
  return (
    <div className='app'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to='/some-route'
        >
          Greeting
        </Link>
      </header>
    </div>
  )
}

export default FirstScreen