import React from 'react'
import { HeaderContainer, AvatarContent, LogoContent } from './styles'
import Venturus from '../../assets/venturusLogo.svg'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContent>
        <Venturus />
        <h3>Squad Management Tool</h3>
      </LogoContent>
      <AvatarContent>
        <h4>Marcelo Eduardo</h4>
        <img
          src="https://ui-avatars.com/api/?name=Marcelo Eduardo"
          alt="avatar"
        />
      </AvatarContent>
    </HeaderContainer>
  )
}

export default React.memo(Header)
