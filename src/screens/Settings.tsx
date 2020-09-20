import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../cpts/common-unstyled/Button'
import Select from '../cpts/common-unstyled/Select'
import getLocalStorageObj from '../helpers/getLocalStorageObj'
import setLocalStorageObj from '../helpers/setLocalStorageObj'
import langCodeToLang from '../helpers/langCodeToLang'
import { Lang } from '../types/MWADLocalStorage'
import SkillLevel from '../types/SkillLevel'
import GoogleTranslateLangCodes from '../types/GoogleTranslateLangCodes'

const skillLevelToLabel = (skillLevel: string) => `Showing ${skillLevel} words`

const labelToSkillLevel = (label: string) => label.replace('Showing ', '').replace(' words', '')

interface Selected {
  [langCode: string]: string
}

const Settings = () => {
  const [selected, setSelected] = useState<Selected>()

  useEffect(() => {
    const ls = getLocalStorageObj()
    const sortedLangs = ls.langs.sort((a: Lang, b: Lang) => {
      const _a = langCodeToLang(a.langCode)
      const _b = langCodeToLang(b.langCode)

      if (!_a || !_b) {
        return 0
      }

      if (_a < _b) {
        return -1
      }

      if (_a > _b) {
        return 1
      }

      return 0
    })

    const newSelected: Selected = {}

    sortedLangs.forEach((i: Lang) => {
      if (i.skillLevel) {
        newSelected[i.langCode] = skillLevelToLabel(i.skillLevel)
      }
    })
    setSelected(newSelected)
  }, [])

  const handleSelect = (option: string, key: string) => {
    const ls = getLocalStorageObj()

    const lsSelectedLang = ls.langs.find((i:Lang) => i.langCode === key)

    lsSelectedLang.skillLevel = labelToSkillLevel(option)

    setLocalStorageObj({
      langs: ls.langs,
      timestamp: new Date()
    })

    const newSelected: Selected = {...selected}

    ls.langs.forEach((i: Lang) => {
      if (i.skillLevel) {
        if (i.langCode === key) {
          newSelected[i.langCode] = option
        } 
      }
    })

    setSelected(newSelected)
  }

  const handleRemove = (key: GoogleTranslateLangCodes) => {
    const ls = getLocalStorageObj()

    setLocalStorageObj({
      langs: ls.langs.filter((i: Lang) => i.langCode !== key),
      timestamp: new Date()
    })

    const newSelected: Selected = {...selected}

    delete newSelected[key]

    setSelected(newSelected)
  }

  if (!selected) {
    return null
  }

  return <div className="h-full flex flex-col justify-between">
    <div className="flex-1">
    {Object.keys(selected).map((key) => {

      return <div key={key}>
        <div>{langCodeToLang(key as GoogleTranslateLangCodes)}</div>
        <Select
          className='select'
          handleSelect={option => handleSelect(option, key)}
          id={key}
          options={[
            'Showing hard words',
            'Showing medium words',
            'Showing easy words',
          ]}
          value={selected[key]}
        />
        <div style={{
          fontSize: 18,
          fontFamily: "din, sans-serif",
          display: 'block',
          color: 'var(--red)'
        }}>
        <Button onClick={() => handleRemove(key as GoogleTranslateLangCodes)}>Remove</Button></div>
      </div>
    })}
    <Link to="/settings/langs" className="text-blue underline">+ Add languages</Link>
  </div>
  <div className="text-center">
    <Link to="/word" className="text-blue inline-block underline mb-23">Exit settings</Link>
  </div>
  </div>
}

export default Settings