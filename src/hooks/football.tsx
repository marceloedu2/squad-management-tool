import React, { createContext, useCallback, useContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import api from '../services/api'

export interface IPlayer {
  age: number
  birth_country: string
  birth_date: string
  birth_place: string
  firstname: string
  height: number
  lastname: string
  nationality: string
  number: number
  player_id: number
  player_name: string
  position: string
  weight: number
}

export interface IMyTeams {
  id: string
  name: string
  description: string
  type: string
  website: string
  tags: string
  formation: string
  formationObject: any
}

interface IFootballContextData {
  myTeams: IMyTeams[]
  searchPlayer(name: string): Promise<IPlayer[]>
  indexMyTeam(index: string): IMyTeams
  createMyTeams(data: IMyTeams[]): Promise<IMyTeams[]>
  updateMyTeams(data: IMyTeams): IMyTeams[]
  deleteMyTeams(index: string): IMyTeams[]
}

const FootballHook = createContext<IFootballContextData>(
  {} as IFootballContextData
)

const handlerLocalSores = () => {
  let teams = []
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('@venturus:myteams')
    teams = JSON.parse(value)
  }
  return teams
}

const FootballProvider: React.FC = ({ children }) => {
  const [myTeams, setMyTeams] = useState<IMyTeams[]>(handlerLocalSores)

  const searchPlayer = useCallback(async name => {
    console.log(process.env.NEXT_PUBLIC_API_HOST)

    const response: any = await api
      .get(`/v2/players/search/${name}`)
      .catch(e => console.log(e))
    const result: IPlayer[] = response?.data?.api?.players?.slice(0, 20)

    return result || []
  }, [])

  const createMyTeams = useCallback(async data => {
    const {
      teamDescription,
      teamName,
      teamType,
      teamWebsite,
      tags,
      formation,
      formationObject
    } = data

    const team = {
      id: uuidv4(),
      name: teamName,
      description: teamDescription,
      type: teamType,
      website: teamWebsite,
      tags,
      formation,
      formationObject: JSON.parse(formationObject)
    }
    const result = handlerLocalSores() ? [...handlerLocalSores(), team] : [team]
    setMyTeams(result)

    result && localStorage.setItem('@venturus:myteams', JSON.stringify(result))
    return handlerLocalSores()
  }, [])

  const updateMyTeams = useCallback(data => {
    const team = {
      id: data.id,
      name: data.teamName,
      description: data.teamDescription,
      type: data.teamType,
      website: data.teamWebsite,
      tags: data.tags,
      formation: data.formation,
      formationObject: JSON.parse(data.formationObject)
    }
    const result = handlerLocalSores().map(item => {
      return item.id === data.id ? (item = team) : item
    })

    result && setMyTeams(result)
    result && localStorage.setItem('@venturus:myteams', JSON.stringify(result))
    return handlerLocalSores()
  }, [])

  const deleteMyTeams = useCallback(index => {
    const result = handlerLocalSores().filter(item => item.id !== index)

    result && setMyTeams(result)
    result && localStorage.setItem('@venturus:myteams', JSON.stringify(result))
    return result
  }, [])

  const indexMyTeam = useCallback(index => {
    const team = handlerLocalSores().filter(item => item.id === index)

    return team[0]
  }, [])

  return (
    <FootballHook.Provider
      value={{
        myTeams,
        searchPlayer,
        indexMyTeam,
        createMyTeams,
        updateMyTeams,
        deleteMyTeams
      }}
    >
      {children}
    </FootballHook.Provider>
  )
}

const useFootball = (): IFootballContextData => {
  const context = useContext(FootballHook)

  if (!context) {
    console.log('useFootball must be used within an FootballProvider')
  }

  return context
}

export { FootballProvider, useFootball }
