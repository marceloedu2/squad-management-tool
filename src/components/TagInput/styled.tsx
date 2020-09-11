import styled from 'styled-components'

export const ContentTagInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 162px;
  background: ${props => props.theme.colors.backgroundTwo};
  border: 2px solid ${props => props.theme.colors.background};
  border-radius: 6px;
  padding: 5px 5px 0;
  cursor: text;
  input {
    width: 100%;
    border: none;
    height: 35px;
    padding: 0;
    margin: 0;
  }
`

export const ContainerTagInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h4 {
    width: 100%;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary};
    ${ContentTagInput} {
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
`

export const LiTagInput = styled.div`
  list-style: none;
  color: ${props => props.theme.colors.text};
`

export const UlTagInput = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const LiTag = styled.li`
  display: flex;
  height: 15px;
  list-style: none;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border-radius: 12px;
  color: ${props => props.theme.colors.background};
  padding: 12px 8px;
  margin: 3px 3px;
  button {
    margin: 4px 0 0 4px;
    svg {
      font-size: 16px;
      color: ${props => props.theme.colors.background};
    }
  }
`
