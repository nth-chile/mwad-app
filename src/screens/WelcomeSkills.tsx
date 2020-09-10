import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SkillLevel from '../types/SkillLevel'
import Check from '../cpts/Check'

interface Values {
  [key: string]: boolean;
}

const WelcomeSkills = () => {
  const [selected, setSelected] = useState<SkillLevel | undefined>()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value as SkillLevel);
  }

  return <div className="flex flex-col h-full">
    <div className="flex-grow">
      <p>How familiar are you with LANGUAGE NAME HERE?</p>
      <div className="mt-40">
        <Check
          checked={selected === 'easy'}
          className="radio"
          label="Not at all"
          onChange={handleChange}
          type="radio"
          value="easy"
        />
        <Check
          checked={selected === 'medium'}
          className="radio"
          label="A little"
          onChange={handleChange}
          type="radio"
          value="medium"
        />
        <Check
          checked={selected === 'hard'}
          className="radio"
          label="Fluent"
          onChange={handleChange}
          type="radio"
          value="hard"
        />
      </div>
    </div>
    <div className="flex-shrink-0">
      <Link to="/welcome/langs" className="btn text-center block w-full">Continue</Link>
    </div>
  </div>
}

export default WelcomeSkills