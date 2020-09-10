/** This is a form select component, and NOT a dropdown menu.
 * This component adds classes to the container: .select-open, .select-closed */

import React, { useState, useEffect, useRef, CSSProperties } from 'react'
import slugify from 'slugify'
import uniqid from 'uniqid'
import Button from './Button'
import matchingAncestor from '../../helpers/matchingAncestor'

interface Props {
  className?: string;
  handleSelect: (option: string) => any
  id?: string;
  disabled?: boolean;
  options: string[];
  value?: string;
  variant?: string;
}

const Select = ({
  className,
  disabled,
  id,
  handleSelect: handleSelectProp,
  options,
  value,
  variant,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  const idRef = useRef<string>()

  useEffect(() => {
    idRef.current = id || uniqid()
  }, [id])

  // if you clicked not on the button, button children, list or list children

  const handleBlur = (e: any) => {
    if (isOpen) {
      if (!matchingAncestor(e.target, `#${idRef.current}`, 3)) {
        setIsOpen(false)
      }
    }
  }

  const handleBtnClick = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (e: React.MouseEvent, option: string) => {
    setIsOpen(false)

    if (handleSelectProp) {
      handleSelectProp(option)
    }
  }

  const containerStyle = {
    position: 'relative',
  } as CSSProperties

  const ulStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
  } as CSSProperties

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur, true)
    return () => document.removeEventListener('mousedown', handleBlur, true)
  })

  return (
    <div
      id={idRef.current}
      className={`${className} ${isOpen ? 'select-open' : 'select-closed'}`}
      style={containerStyle}
    >
      <Button
        disabled={disabled}
        onClick={handleBtnClick}
        ref={buttonRef}
      >
        {value || 'Select'}
      </Button>
      <ul style={ulStyle} ref={listRef}>
        {options.reduce((filtered, option) => {
          if (option !== value) {
            filtered.push(
              <li key={slugify(option)}>
                <Button variant="unstyled" onClick={(e) => handleSelect(e, option)}>
                  {option}
                </Button>
              </li>,
            )
          }

          return filtered
        }, [] as JSX.Element[])}
      </ul>
    </div>
  )
}

export default Select
