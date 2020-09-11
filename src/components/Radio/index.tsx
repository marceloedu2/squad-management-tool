import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { ContainerRadio, Fill, InputRadio } from './styles'

interface Option {
  id: string | number
  label: string
}

interface Props {
  name: string
  label: string
  options: Option[]
  defaultValue: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Radio: React.FC<InputProps> = ({
  name,
  options,
  label,
  defaultValue
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue(refs: HTMLInputElement[]) {
        const checked = refs.find(ref => ref.checked)

        return checked ? checked.value : null
      },
      setValue(refs: HTMLInputElement[], value) {
        const item = refs.find(ref => ref.value === value)

        if (item) {
          item.checked = true
        }
      }
    })
  }, [fieldName, registerField])

  return (
    <ContainerRadio>
      <h4>{label}</h4>
      <div>
        {options.map((option, index) => (
          <label key={option.id}>
            <InputRadio
              ref={elRef => {
                if (elRef) {
                  inputRefs.current[index] = elRef
                }
              }}
              type="radio"
              name={fieldName}
              value={option.id}
              defaultChecked={defaultValue === option.id}
            />
            <span>{option.label}</span>
            <Fill />
          </label>
        ))}
      </div>
    </ContainerRadio>
  )
}

export default Radio
