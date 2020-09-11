import styled, { css } from 'styled-components'
import { query } from 'atomic-layout'

interface IContainerCardPlayer {
  isDragging: boolean
}

export const ContainerCardPlayer = styled.div<IContainerCardPlayer>`
  margin: 16px 0;
  padding: 16px 28px;
  border-radius: 4px;
  border: 2px dashed ${props => props.theme.colors.textGray};
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.background},
    ${props => props.theme.colors.backgroundTwo}
  );
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: grab;
  > div {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    cursor: grab;

    > div {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;
      font-size: 18px;
      cursor: grab;

      b {
        font-size: 16px;
        color: ${props => props.theme.colors.text};
        cursor: grab;
      }
    }
  }
  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed ${props => props.theme.colors.textGray};
      background: transparent;
      box-shadow: none;
      cursor: grabbing;
      div {
        opacity: 0;
      }
    `}
  @media ${query({ to: 'dm' })} {
  }
  @media ${query({ to: 'sm' })} {
  }
`
