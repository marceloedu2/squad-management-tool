import React, { createContext, useCallback, useContext, useState } from 'react'
import { IPlayer } from './football'

interface IRequestUpdate {
  column: number
  row: number
  item: any | never
}

export interface IHighersAvgAge {
  highestAge: IPlayer[]
  lowestAge: IPlayer[]
}

export interface FormationContextData {
  formObject: any
  createFormation(data: []): void
  updateFormation(data: IRequestUpdate): void
  indexHighestAvgAge(): IHighersAvgAge
}

const FormationHook = createContext<FormationContextData>(
  {} as FormationContextData
)

const FormationProvider: React.FC = ({ children }) => {
  const [formObject, setFormObject] = useState<any>([])

  const createFormation = useCallback(data => {
    setFormObject(data)
  }, [])

  const updateFormation = useCallback(data => {
    const { column, row, item } = data

    setFormObject(result => {
      result[column][row] = item
      return [...result]
    })
  }, [])

  const indexHighestAvgAge = useCallback(() => {
    const formObject = []
    let teams = []
    let highestAge = []
    let lowestAge = []
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('@venturus:myteams')
      teams = JSON.parse(value)
      teams.length > 0 &&
        teams.map(array => {
          array.formationObject.map(ArrayObject => {
            ArrayObject.map(object => {
              if (formObject.length > 0) {
                let val = true
                formObject.map(item => {
                  if (item.player_id === object.player_id) {
                    val = false
                  }
                })
                val && formObject.push(object)
              } else {
                formObject.push(object)
              }
            })
          })
        })

      highestAge = formObject
        .sort((a: IPlayer, b: IPlayer): any => {
          return a.age > b.age && a.player_id !== b.player_id
            ? -1
            : a.age < b.age && a.player_id !== b.player_id
            ? 1
            : 0
        })
        .slice(0, 5)
      lowestAge = formObject
        .sort((a: IPlayer, b: IPlayer): any => {
          return a.age < b.age && a.player_id !== b.player_id
            ? -1
            : a.age > b.age && a.player_id !== b.player_id
            ? 1
            : 0
        })
        .slice(0, 5)
    }
    return { highestAge: [...highestAge], lowestAge: [...lowestAge] }
  }, [])

  return (
    <FormationHook.Provider
      value={{
        formObject,
        createFormation,
        updateFormation,
        indexHighestAvgAge
      }}
    >
      {children}
    </FormationHook.Provider>
  )
}

const useFormation = (): FormationContextData => {
  const context = useContext(FormationHook)

  if (!context) {
    console.log('useFormation must be used within an FormationProvider')
  }

  return context
}

export { FormationProvider, useFormation }
