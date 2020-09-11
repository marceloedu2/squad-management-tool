import styled, { css } from 'styled-components'

interface IContentMyFormationItem {
  player: boolean
}

export const ContentMyFormationItem = styled.div<IContentMyFormationItem>`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 70px;
  height: 70px;
  background-color: rgba(62, 49, 49, 0.4);
  border: 2px dashed ${props => props.theme.colors.primary};
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 4px;
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.primary};
  }
  ${props =>
    props.player &&
    css`
      div {
        font-size: 16px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-weight: 700;
        font-size: 36px;
        color: ${props => props.theme.colors.secondary};
      }
      background-color: ${props => props.theme.colors.dangerBackground};
      img {
        max-width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.colors.secondary};
      }
    `}
`
