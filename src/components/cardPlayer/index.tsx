import React from 'react'
import { useDrag } from 'react-dnd'
import { ContainerCardPlayer } from './styles'
import { IPlayer } from '@/hooks/football'

interface ICardPlayer {
  player: IPlayer
}

const CardPlayer: React.FC<ICardPlayer> = ({ player }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: 'CARD',
      ...player
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <ContainerCardPlayer ref={dragRef} isDragging={isDragging}>
      <div>
        <div>
          <b>Name:</b> {player.player_name}
        </div>
        <div>
          <b>Age:</b> {player.age}
        </div>
      </div>
      <div>
        <div>
          <b>Nationality:</b> {player.nationality}
        </div>
      </div>
    </ContainerCardPlayer>
  )
}

export default CardPlayer
