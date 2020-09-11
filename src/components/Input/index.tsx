import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { ContainerInput } from './styles'
import { useField } from '@unform/core'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  nameLabel: string
  name: string
}

const Input: React.FC<IInput> = ({ name, nameLabel, ...props }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    <ContainerInput alertError={!!error}>
      <label htmlFor={name}>{nameLabel}</label>
      <input ref={inputRef} name={name} {...props} />
      <span>{error}</span>
    </ContainerInput>
  )
}

export default React.memo(Input)
