// Checkbox, or radio if you put type="radio"

import React, { useRef } from 'react'
import uniqid from 'uniqid'

interface Props {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  type?: string;
  value?: string;
}

const Check = ({
  checked = false,
  className,
  disabled = false,
  id,
  label,
  name,
  onChange,
  type = 'checkbox',
  value,
}: Props) => {
  const idRef = useRef(id || uniqid())

  return (
    <div className={className}>
      <input
        checked={checked}
        disabled={disabled}
        id={idRef.current}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {label && <label htmlFor={idRef.current}>{label}</label>}
    </div>
  )
}

export default Check
