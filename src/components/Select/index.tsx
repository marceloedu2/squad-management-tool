import React, { SelectHTMLAttributes, useRef, useEffect } from 'react'

import { ContainerSelect } from './styles'
import { useField } from '@unform/core'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  children: JSX.Element | JSX.Element[]
  nameLabel: string
}

const Select: React.FC<ISelect> = ({ children, nameLabel, name, ...props }) => {
  const selectRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <ContainerSelect alertError={!!error}>
      <div>
        <label>{nameLabel}</label>
        <select name={name} ref={selectRef} {...props}>
          {children}
        </select>
      </div>
      <span>{error}</span>
    </ContainerSelect>
  )
}

export default Select
