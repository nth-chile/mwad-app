import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import getLocalStorageObj from '../helpers/getLocalStorageObj'
import setLocalStorageObj from '../helpers/setLocalStorageObj'
import langCodeToLang from '../helpers/langCodeToLang'
import SkillLevel from '../types/SkillLevel'
import Button from '../cpts/Button'
import Check from '../cpts/Check'
import { Lang } from '../types/MWADLocalStorage'
import GoogleTranslateLangCodes from '../types/GoogleTranslateLangCodes'

const WelcomeSkills = ({ history }: RouteComponentProps) => {
  const [selected, setSelected] = useState<SkillLevel | undefined | null>()
  const [lang, setLang] = useState<GoogleTranslateLangCodes | undefined | null>()

  // Check localStorage and return the first language without a skillLevel set
  const getFirstLangWithoutSkillLevel = () => {
    const ls = getLocalStorageObj()
    const langs: Lang[] = ls.langs

    for (let i = 0; i < langs.length; i++) {
      const current = langs[i]

      if (!current.skillLevel) {
        return current.langCode
      }
    }
  }

  // On mount, set lang or continue to /word
  useEffect(() => {
    const newLang = getFirstLangWithoutSkillLevel()

    if (!newLang) {
      history.push('/word')
    }

    setLang(newLang)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Set skill level in localStorage and component state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value as SkillLevel);

    const ls = getLocalStorageObj()
    const langs: Lang[] = ls.langs

    for (let i = 0; i < langs.length; i++) {
      const current = langs[i]

      if (current.langCode === lang) {
        current.skillLevel = e.target.value as SkillLevel

        setLocalStorageObj({
          ...ls,
          timestamp: new Date()
        })

        break
      }
    }
  }

  // Look for next lang or continue to /word
  const handleSubmit = () => {
    const newLang = getFirstLangWithoutSkillLevel()

    if (!newLang) {
      history.push('/word')
    }


    setLang(newLang)
    setSelected(null)
  }

  if (!lang || !langCodeToLang(lang)) {
    return null
  }

  return <div className="flex flex-col h-full">
    <div className="flex-grow">
      <p>How familiar are you with {langCodeToLang(lang)}?</p>
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
      <Button disabled={!selected} className="w-full" onClick={handleSubmit}>Continue</Button>
    </div>
  </div>
}

export default withRouter(WelcomeSkills)