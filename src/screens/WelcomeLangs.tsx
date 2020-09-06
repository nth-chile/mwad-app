import React from 'react'
import { Link } from 'react-router-dom'
import Check from '../cpts/Check'

const WelcomeLangs = () => {
  return <div className="flex flex-col h-full">
    <div className="flex-grow">
      <p>Start by selecting the languages you’d like to learn.</p>
      <ul style={{ fontSize: 18}}>
        <li className="py-14 px-20 border-solid border-b border-grey">
          <Check className="checkbox-right" value="arabic" label="Arabic" />
        </li>
        <li className="py-14 px-20 border-solid border-b border-grey">
          <label>
            Hindi
            <input type="checkbox" />
          </label>
        </li>
        <li className="py-14 px-20 border-solid border-b border-grey">
          <label>
            German
            <input type="checkbox" />
          </label>
        </li>
        <li className="py-14 px-20 border-solid border-b border-grey">
          <label>
            Vietnamese
            <input type="checkbox" />
          </label>
        </li>
      </ul>
    </div>
    <div className="flex-shrink-0">
      <Link to="/welcome/langs" className="btn text-center block w-full">Continue</Link>
    </div>
  </div>
}

export default WelcomeLangs