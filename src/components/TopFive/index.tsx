import React from 'react'
import {
  ContentTitle,
  ContainerTopFive,
  ContentTopFive,
  CardTopFive
} from './styles'
import { IHighersAvgAge } from '@/hooks/formation'

interface ITopFive {
  agePlayers: IHighersAvgAge
}

const TopFive: React.FC<ITopFive> = ({ agePlayers }) => {
  return (
    <ContainerTopFive>
      <ContentTitle>
        <h1>Top 5</h1>
      </ContentTitle>
      <ContentTopFive>
        <CardTopFive>
          <h3>Highest avg age</h3>
          <div>
            {agePlayers.highestAge?.map((item, index) => (
              <div key={index}>
                <span>{item.player_name} </span>
                <b>{item.age}</b>
              </div>
            ))}
          </div>
        </CardTopFive>
        <CardTopFive>
          <h3>Lowest avg age</h3>
          <div>
            {agePlayers.lowestAge?.map((item, index) => (
              <div key={index}>
                <span>{item.player_name} </span>
                <b>{item.age}</b>
              </div>
            ))}
          </div>
        </CardTopFive>
      </ContentTopFive>
    </ContainerTopFive>
  )
}

export default React.memo(TopFive)
