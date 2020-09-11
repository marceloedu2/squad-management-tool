import styled, { css } from 'styled-components'

interface IContainerSelect {
  alertError: boolean
}

export const ContainerSelect = styled.div<IContainerSelect>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 28px 0;
  label {
    font-weight: 700;
    margin-right: 32px;
  }
  select {
    width: 150px;
    height: 30px;
    border-radius: 4px;
    padding: 0 8px;
    cursor: pointer;
  }
  span {
    display: none;
    font-weight: 700;
    font-size: 14px;
    margin: 4px 0 0 110px;
    color: ${props => props.theme.colors.dangerColor};
  }
  ${props =>
    props.alertError &&
    css`
      label {
        color: ${props => props.theme.colors.dangerColor};
      }
      select {
        border: 2px solid ${props => props.theme.colors.dangerColor};
      }
      span {
        display: block;
      }
    `}
`
