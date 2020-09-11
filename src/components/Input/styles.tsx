import styled, { css } from 'styled-components'

interface IContainerInput {
  alertError: boolean
}

export const ContainerInput = styled.div<IContainerInput>`
  display: flex;
  flex-direction: column;

  margin: 28px 0;
  label {
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    height: 35px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.background};
    padding: 0 16px;
  }

  &:hover,
  &:focus {
    input {
      border: 2px solid ${props => props.theme.colors.primary};
    }
    label {
      color: ${props => props.theme.colors.primary};
    }
  }
  span {
    display: none;
    font-weight: 700;
    font-size: 14px;
    margin-top: 4px;
    color: ${props => props.theme.colors.dangerColor};
  }
  ${props =>
    props.alertError &&
    css`
      label {
        color: ${props => props.theme.colors.dangerColor};
      }
      input {
        border: 2px solid ${props => props.theme.colors.dangerColor};
      }
      span {
        display: block;
      }
    `}
`
