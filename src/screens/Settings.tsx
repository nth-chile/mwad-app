import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../cpts/common-unstyled/Button'
import Select from '../cpts/common-unstyled/Select'

const Settings = () => {
  const [selected, setSelected] = useState({
    arabic: 'Showing hard words',
    german: 'Showing hard words',
    vietnamese: 'Showing hard words'
  })
  const handleSelect = (option: string) => {

  }

  return <div className="h-full flex flex-col justify-between">
    <div className="flex-1">
    <div>
      <div>Arabic</div>
      <Select
        className='select'
        handleSelect={handleSelect}
        id="arabic"
        options={[
          'Showing hard words',
          'Showing medium words',
          'Showing easy words',
        ]}
        value={selected['arabic']}
      />
      <div style={{
        fontSize: 18,
        fontFamily: "din, sans-serif",
        display: 'block',
        color: 'var(--red)'
      }}>
      <Button>Remove</Button></div>
    </div>
    <div>
      <div>German</div>
      <Select
        className='select'
        handleSelect={handleSelect}
        id="german"
        options={[
          'Showing hard words',
          'Showing medium words',
          'Showing easy words',
        ]}
        value={selected['german']}
      />
      <div style={{
        fontSize: 18,
        fontFamily: "din, sans-serif",
        display: 'block',
        color: 'var(--red)'
      }}>
      <Button>Remove</Button></div>
    </div>
    <div>
      <div>Vietnamese</div>
      <Select
        className='select'
        handleSelect={handleSelect}
        id="vietnamese"
        options={[
          'Showing hard words',
          'Showing medium words',
          'Showing easy words',
        ]}
        value={selected['vietnamese']}
      />
      <div style={{
        fontSize: 18,
        fontFamily: "din, sans-serif",
        display: 'block',
        color: 'var(--red)'
      }}>
      <Button>Remove</Button></div>
    </div>
    <Link to="/settings/langs" className="text-blue underline">+ Add languages</Link>
  </div>
  <div className="text-center">
    <Link to="/word" className="text-blue inline-block underline mb-23">Exit settings</Link>
  </div>
  </div>
}

export default Settings