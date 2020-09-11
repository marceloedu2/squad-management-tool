import styled from 'styled-components'
import { Composition, query } from 'atomic-layout'

export const ContainerTeam = styled(Composition)`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ContentTeam = styled(Composition)`
  margin: 48px;
  display: flex;
  align-items: start;
  padding: 28px;
  background-color: ${props => props.theme.colors.backgroundTwo};
  border-radius: 8px;
  h3 {
    width: 100%;
    text-align: center;
    color: ${props => props.theme.colors.textGray};
    margin-top: 16px;
  }
  @media ${query({ to: 'md' })} {
    margin: 0;
    padding: 28px 16px;
    border-radius: 0;
  }
  @media ${query({ to: 'sm' })} {
    margin: 0;
    padding: 28px 16px;

    border-radius: 0;
  }
`

export const DivTeam = styled.div`
  padding: 16px 112px;
  @media ${query({ to: 'sm' })} {
    padding: 0;
  }
`

export const DivSearch = styled.div`
  padding: 16px 112px;
  > div {
    max-height: 565px;
    overflow: auto;
  }
  @media ${query({ to: 'md' })} {
    padding: 0;
    div {
      max-height: 300px;
    }
  }
  @media ${query({ to: 'sm' })} {
    padding: 0;
    div {
      max-height: 300px;
    }
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-left: 16px;
  }
  > div {
    display: flex;
    flex-direction: row;
    margin: 6px 0 0 0;
    > div {
      flex: 1;
    }
    > div + div {
      flex: 5;
    }
    @media ${query({ to: 'sm' })} {
      > div {
        flex: 1;
      }
      > div + div {
        flex: 2;
      }
    }
  }
`

export const ContainerInputTag = styled.div`
  margin: 16px 0;
  h4 {
    margin-bottom: 16px;
  }
`

export const UlSearchPlayers = styled.ul`
  margin: 16px 0;
  padding: 16px 28px;
  border-radius: 4px;
  border: 2px dashed ${props => props.theme.colors.textGray};
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.background},
    ${props => props.theme.colors.backgroundTwo}
  );
  cursor: pointer;
  > div {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    > div {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;
      font-size: 18px;
      b {
        font-size: 16px;
        color: ${props => props.theme.colors.text};
      }
    }
  }
`
