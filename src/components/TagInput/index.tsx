import React, {
  useState,
  InputHTMLAttributes,
  useRef,
  useEffect,
  useCallback
} from 'react'

import { FiX } from 'react-icons/fi'
import {
  ContainerTagInput,
  ContentTagInput,
  UlTagInput,
  LiTag,
  LiTagInput
} from './styled'
import { useField } from '@unform/core'

interface ITagInput extends InputHTMLAttributes<HTMLInputElement> {
  nameLabel: string
  name: string
  defValue: string[]
}

const TagInput: React.FC<ITagInput> = ({
  name,
  nameLabel,
  defValue,
  ...props
}) => {
  const [tags, setTags] = useState([])

  const inputTagRef = useRef(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputTagRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  useEffect(() => {
    defValue && setTags(defValue)
  }, [defValue])

  const handlerInputKeyDown = useCallback(event => {
    event.target.value = event.target.value.replace(';', '')
    const newTag = event.target.value
    if ((event.key === 'Enter' || event.key === ';') && newTag) {
      if (tags.find(tag => tag.toLowerCase() === newTag.toLowerCase())) {
        event.preventDefault()
        return
      }
      event.target.value = null
      setTags([...tags, newTag])
    } else if (event.key === 'Backspace' && !newTag) {
      handlerRemoveTag(tags.length - 1)
    }
    if (event.which === 13) {
      event.preventDefault()
    }
  }, [tags])

  const handlerRemoveTag = useCallback(i => {
    const newTags = [...tags]
    newTags.splice(i, 1)
    setTags(newTags)
  }, [tags])

  const handlerClickInput = useCallback(event => {
    event.preventDefault()
    document.getElementById('inputTagsValue').focus()
  }, [])

  return (
    <ContainerTagInput>
      <h4>{nameLabel}</h4>
      <ContentTagInput onClick={handlerClickInput}>
        <UlTagInput>
          {tags.map((tag, key) => (
            <LiTag key={tag}>
              {tag}
              <button type="button" onClick={() => handlerRemoveTag(key)}>
                <FiX />
              </button>
            </LiTag>
          ))}
          <LiTagInput>
            <input
              type="text"
              id="inputTagsValue"
              onKeyDown={() => handlerInputKeyDown(event)}
            />
          </LiTagInput>
        </UlTagInput>
      </ContentTagInput>
      <input
        type="text"
        name={name}
        ref={inputTagRef}
        defaultValue={tags}
        style={{ display: 'none' }}
        {...props}
      />
    </ContainerTagInput>
  )
}

export default React.memo(TagInput)
