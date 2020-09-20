import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import update from 'immutability-helper'
import getLocalStorageObj from '../helpers/getLocalStorageObj'
import setLocalStorageObj from '../helpers/setLocalStorageObj'
import langCodeToLang from '../helpers/langCodeToLang'
import MWADLocalStorage, { Lang } from '../types/MWADLocalStorage'
import GoogleTranslateLangCodes from '../types/GoogleTranslateLangCodes'

interface Values {
  [key: string]: boolean;
}

const SettingsLangs = () => {
  const [values, setValues] = useState<Values>({
    'ar': false,
    'hi': false,
    'de': false,
    'vi': false,
  })

  useEffect(() => {
    const ls = getLocalStorageObj()
    const langs: Lang[] = ls.langs
    const newVals = values

    Object.keys(values).forEach((i) => {
      const isChecked = !!langs.find((j: Lang) => j.langCode === i)

      if (isChecked) {
        newVals[i] = true
      }
    })

    setValues({ ...newVals })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const langToggled = e.target.value as GoogleTranslateLangCodes
    const newToggleVal = !values[langToggled]

    // Set state
    setValues(update(values, {
      [langToggled]: { $set: newToggleVal }
    }))

    const ls: MWADLocalStorage = getLocalStorageObj()
    const { langs } = ls
    let newLangs: Lang[]

    if (newToggleVal) {
      // Add lang to newLangs
      newLangs = [...langs, {
        langCode: langToggled,
        skillLevel: 'easy' // set it to easy
      }]
    } else {
      // Remove lang from newLangs
      newLangs = [...langs].filter(i => i.langCode !== langToggled)
    }

    setLocalStorageObj({
      langs: newLangs,
      timestamp: new Date()
    })
  }

  return <div className="flex flex-col h-full">
    <div className="flex-grow">
      <ul className="mt-18" style={{ fontSize: 18 }}>
        {Object.keys(values).map((i, index) => {
          const label = langCodeToLang(i as GoogleTranslateLangCodes)

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
        })}
      </ul>
    </div>
    <div className="flex-shrink-0">
      <Link to="/settings" className="btn text-center block w-full">OK</Link>
    </div>
  </div>
}

export default SettingsLangs