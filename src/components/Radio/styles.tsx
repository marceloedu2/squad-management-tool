import styled from 'styled-components'

export const Fill = styled.div`
  background: ${props => props.theme.colors.backgroundTwo};
  border: 1px solid ${props => props.theme.colors.textGray};
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  pointer-events: none;
  &::before {
    content: ' ';
    position: absolute;
    opacity: 0;
    width: 2px;
    height: 2px;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    border: 3px solid ${props => props.theme.colors.primary};
  }
`

export const InputRadio = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  &:checked {
    & ~ ${Fill} {
      transition: width 0.2s ease-out, height 0.2s ease-out;
      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 700;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30px;
    label {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      color: ${props => props.theme.colors.text};
      position: relative;
      span {
        pointer-events: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        left: 24px;
        margin-top: 1px;
        color: ${props => props.theme.colors.text};
        ${InputRadio}:checked {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`
