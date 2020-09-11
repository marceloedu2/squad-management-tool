import React, { TextareaHTMLAttributes, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { ContainerTextArea } from './styles'

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  nameLabel: string
  name: string
}

const TextArea: React.FC<ITextarea> = ({ name, nameLabel, ...props }) => {
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
    <ContainerTextArea alertError={!!error}>
      <label htmlFor={name}>{nameLabel}</label>
      <textarea ref={inputRef} name={name} {...props} />
      <span>{error}</span>
    </ContainerTextArea>
  )
}

export default React.memo(TextArea)
