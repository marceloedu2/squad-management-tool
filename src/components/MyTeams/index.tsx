import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'

import Tooltip from '@/components/Tooltip'
import { FaTrash, FaPlus, FaShareAlt, FaPen, FaSort } from 'react-icons/fa'
import { ContainerTeams, ContentTitle, ContentTeams } from './styles'
import { useFootball, IMyTeams } from '@/hooks/football'

interface IMyNewTeams {
  myTeams: IMyTeams[]
}

const MyTeams: React.FC<IMyNewTeams> = ({ myTeams }) => {
  const router = useRouter()
  const { deleteMyTeams } = useFootball()
  const [teams, setTeams] = useState<IMyTeams[]>([])

  useEffect(() => {
    myTeams && setTeams(myTeams)
  }, [])

  const handlerButtonTeam = useCallback(() => {
    return router.push('team')
  }, [])

  const handlerEditMyTeam = useCallback((id: string) => {
    return router.push(`team/?id=${id}`)
  }, [])

  const handlerDeleteMyTeam = useCallback(key => {
    const result = deleteMyTeams(key)
    setTeams(result)
  }, [])
  return (
    <ContainerTeams>
      <ContentTitle>
        <h1>My Teams</h1>
        <button onClick={handlerButtonTeam}>
          <FaPlus />
        </button>
      </ContentTitle>
      <ContentTeams>
        <table>
          <thead>
            <tr>
              <th>
                Name <FaSort />
              </th>
              <th colSpan={2}>
                Description <FaSort />
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>
                  <span>{team.name}</span>
                </td>
                <td>
                  <span>{team.description}</span>
                </td>
                <td>
                  <Tooltip content="Exclude">
                    <button
                      onClick={() => {
                        handlerDeleteMyTeam(team.id)
                      }}
                    >
                      <FaTrash />
                    </button>
                  </Tooltip>
                  <Tooltip content="Share">
                    <button
                      onClick={() => {
                        console.log('share')
                      }}
                    >
                      <FaShareAlt />
                    </button>
                  </Tooltip>
                  <Tooltip content="Edit">
                    <button
                      onClick={() => {
                        handlerEditMyTeam(team.id).catch(r => console.log(r))
                      }}
                    >
                      <FaPen />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContentTeams>
    </ContainerTeams>
  )
}

export default MyTeams
