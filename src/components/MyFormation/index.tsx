import React, { useState, useEffect, useRef, useCallback } from 'react'

import { ContainerMyFormation } from './styles'
import ContentPlayer from './components/ContentPlayer'
import { useField } from '@unform/core'
import { useFormation } from '@/hooks/formation'
import { arrayGenerator } from '@/utils/generatorArrays'
import { log } from 'util'

interface IMyFormation {
  formation: string
}
const MyFormation: React.FC<IMyFormation> = ({ formation }) => {
  const inputRef = useRef(null)
  const { formObject } = useFormation()
  const [formObj, setFormObj] = useState<number[]>([])

  const { fieldName, defaultValue, error, registerField } = useField(
    'formationObject'
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  useEffect(() => {
    if (formObject.length > 0) {
      setFormObj(formObject)
    } else if (formation) {
      setFormObj(arrayGenerator(`${formation}-1`))
    }
  }, [formObject])

  const handlerFormationItem = useCallback((item: any, index: number) => {
    const rows = []
    let i = 0
    while (++i <= item.length) {
      console.log({ formObject })
      rows.push(
        <ContentPlayer key={i} column={Number(index)} row={Number(i - 1)} />
      )
    }
    return rows
  }, [])

  return (
    <ContainerMyFormation alertError={!!error}>
      <div>
        <div>
          {formObj.length > 0 &&
            formObj.length !== undefined &&
            formObj.map((item, index) => {
              return (
                <div key={`${index}-${item}`}>
                  {handlerFormationItem(item, index)}
                </div>
              )
            })}
          <input
            type="text"
            name="formationObject"
            ref={inputRef}
            value={JSON.stringify(formObj)}
            style={{ display: 'none' }}
            onChange={() => {}}
          />
        </div>
      </div>
      <span>{error}</span>
    </ContainerMyFormation>
  )
}

export default MyFormation
