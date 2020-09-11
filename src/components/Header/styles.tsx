import styled from 'styled-components'
import { query } from 'atomic-layout'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
`
export const LogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 48px;
  @media ${query({ to: 'sm' })} {
    margin: 0 16px;
  }
  svg {
    width: 45px;
  }
  h3 {
    margin-left: 16px;
    color: ${props => props.theme.colors.background};
    @media ${query({ to: 'sm' })} {
      display: none;
    }
  }
`
export const AvatarContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 48px;
  @media ${query({ to: 'sm' })} {
    margin: 0 16px;
  }
  img {
    width: 45px;
    border-radius: 50%;
  }
  h4 {
    display: flex;
    align-items: center;
    margin-right: 8px;
    color: ${props => props.theme.colors.background};
  }
`
