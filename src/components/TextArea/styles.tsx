import styled, { css } from 'styled-components'

interface IContainerTextArea {
  alertError: boolean
}

export const ContainerTextArea = styled.div<IContainerTextArea>`
  display: flex;
  flex-direction: column;

  margin: 28px 0;
  label {
    font-weight: 700;
    margin-bottom: 8px;
  }

  textarea {
    height: 35px;
    padding: 8px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.background};
    height: 230px;
    font-size: 18px;
    font-family: roboto;
  }

  &:hover,
  &:focus {
    textarea {
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
      textarea {
        border: 2px solid ${props => props.theme.colors.dangerColor};
      }
      span {
        display: block;
      }
    `}
`
