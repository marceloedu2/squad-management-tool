import React from 'react'
import { ContentPickedPlayer, DivAvatar } from './styles'

const PickedPlayer: React.FC = () => {
  return (
    <ContentPickedPlayer>
      <div>
        <DivAvatar>
          <h2>Most picked player</h2>
          <h4>75%</h4>
          <img
            src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
            alt="teste"
          />
        </DivAvatar>
        <DivAvatar>
          <h2>Less picked player</h2>
          <h4>25%</h4>
          <img
            src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
            alt="teste"
          />
        </DivAvatar>
      </div>
    </ContentPickedPlayer>
  )
}

export default React.memo(PickedPlayer)
