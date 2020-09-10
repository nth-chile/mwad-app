import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import update from 'immutability-helper'

interface Values {
  [key: string]: boolean;
}

const WelcomeLangs = () => {
  const [values, setValues] = useState<Values>({
    'arabic': false,
    'hindi': false,
    'german': false,
    'vietnamese': false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = update(values, {
      [e.target.value]: { $set: !values[e.target.value] }
    })

    setValues(newValues)
  }


  const lis = Object.keys(values).map((i, index) => {
    const label = i.charAt(0).toUpperCase() + i.slice(1)

    return <li key={index} className="border-solid border-b border-grey">
      <label className="checkbox-right">
        <div>{label}</div>
        <input
          checked={values[i]}
          name="langs"
          onChange={handleChange}
          type="checkbox"
          value={i}
        />
        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.598 7.398l3.075 3.555L14.656.287c.672-.721 1.73.048 1.201.865l-8.84 13.501c-.672.865-1.584.961-2.353.096L.196 9.416c-.864-1.25 1.345-3.027 2.402-2.018z" fill="#4290F5"/></svg>
      </label>
    </li>
  })

  return <div className="flex flex-col h-full">
    <div className="flex-grow">
      <p>Start by selecting the languages you’d like to learn.</p>
      <ul className="mt-18" style={{ fontSize: 18}}>
        {lis}
      </ul>
    </div>
    <div className="flex-shrink-0">
      <Link to="/welcome/langs" className="btn text-center block w-full">Continue</Link>
    </div>
  </div>
}

export default WelcomeLangs