import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return <div className="flex flex-col h-full">
    <div className="flex-grow flex flex-col justify-center">
      <p>Welcome to Multilingual Word a Day! Learn one word a day from your bucket list of languages.</p>
    </div>
    <div className="flex-shrink-0">
      <Link to="/welcome/langs" className="btn text-center block w-full">Continue</Link>
    </div>
  </div>
}

export default Welcome