import React from 'react'
import { Link } from "react-router-dom";

const SecondScreen = () => {
  return (
    <div className='app'>
      <header className="App-header">
        <h2>Hello, that was a deploy test</h2>
        <Link
          className="App-link"
          to='/'
        >
          Back
        </Link>
      </header>
    </div>
    )
}

export default SecondScreen