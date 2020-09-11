import styled, { css } from 'styled-components'
import lineSoccer from '@/assets/LineSoccer2.png'

interface IContainerMyFormation {
  alertError: boolean
}

export const ContainerMyFormation = styled.div<IContainerMyFormation>`
  display: flex;
  flex-direction: column;
  margin: 16px 4px;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    border-radius: 8px;
    border: 3px solid transparent;

    background-image: linear-gradient(
      to top,
      ${props => props.theme.colors.secondary},
      ${props => props.theme.colors.primary}
    );
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-image: url(${lineSoccer});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      > div {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
  ${props =>
    props.alertError &&
    css`
      span {
        font-weight: 700;
        font-size: 14px;
        margin-top: 6px;
        color: ${props => props.theme.colors.dangerColor};
      }
      > div {
        border: 3px solid ${props => props.theme.colors.dangerColor};
      }
    `}
`
