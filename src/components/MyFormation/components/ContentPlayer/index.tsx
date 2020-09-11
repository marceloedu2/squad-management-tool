import React, { useState, useEffect } from 'react'

import { FaPlus } from 'react-icons/fa'
import { ContentMyFormationItem } from './styles'
import { useDrop } from 'react-dnd'
import { useFormation } from '@/hooks/formation'
import { IPlayer } from '@/hooks/football'
import { initialLetterName } from '@/utils/nameFunction'

interface IContentPlayer {
  column: number
  row: number
}

const ContentPlayer: React.FC<IContentPlayer> = ({ column, row }) => {
  const [player, setPlayer] = useState<IPlayer>({} as IPlayer)
  const { formObject, updateFormation } = useFormation()

  useEffect(() => {
    if (formObject[column][row]) {
      setPlayer(formObject[column][row])
    } else {
      setPlayer({} as IPlayer)
    }
  }, [formObject])

  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop(item: any) {
      let validade = true

      formObject?.map(formArray => {
        formArray.map(form => {
          if (form.player_id === item.player_id) {
            validade = false
          }
        })
      })

      if (validade && item) {
        updateFormation({ column, row, item })
        setPlayer(item as any)
      }
    }
  })

  return (
    <ContentMyFormationItem ref={dropRef} player={!!player}>
      {JSON.stringify(player) !== '{}' && JSON.stringify(player) !== '[]' ? (
        <span>{initialLetterName(player.player_name)}</span>
      ) : (
        <FaPlus />
      )}
    </ContentMyFormationItem>
  )
}

export default ContentPlayer
