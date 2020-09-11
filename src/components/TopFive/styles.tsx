import styled from 'styled-components'
import { query } from 'atomic-layout'

export const ContainerTopFive = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  background-color: ${props => props.theme.colors.backgroundTwo};
  margin: 48px 48px 24px 24px;
  border-radius: 8px;
  @media ${query({ to: 'md' })} {
    margin: 0;
    border-radius: 0;
  }
  @media ${query({ to: 'sm' })} {
    margin: 0;
    border-radius: 0;
  }
`
export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  padding: 18px;
  border-bottom: 2px solid ${props => props.theme.colors.background};
  > h1 {
    color: ${props => props.theme.colors.secondary};
    margin-left: 8px;
  }
`
export const CardTopFive = styled.div`
  flex: 1;
  margin: 24px;
  h3 {
    margin-bottom: 14px;
  }
  > div {
    background-color: ${props => props.theme.colors.background};
    border-radius: 8px;
    padding: 1px 0;

    > div {
      display: flex;
      justify-content: space-between;
      margin: 4px;
      padding: 12px 18px;
      border-radius: 8px;
      border: 2px solid ${props => props.theme.colors.backgroundTwo};
      background-color: ${props => props.theme.colors.backgroundTwo};
      b {
        margin-left: 16px;
      }
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    > div:hover {
      border: 2px solid ${props => props.theme.colors.primary};
    }
  }
  @media ${query({ to: 'md' })} {
    > div {
      > div {
        span {
          max-width: 200px;
        }
      }
    }
    padding-bottom: 16px;
  }
  @media ${query({ to: 'sm' })} {
    > div {
      > div {
        span {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    padding-bottom: 16px;
  }
`
export const ContentTopFive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${CardTopFive} + ${CardTopFive} {
    margin: 24px 24px 24px 0;
  }
  @media ${query({ to: 'md' })} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${CardTopFive} + ${CardTopFive} {
      margin: 0 24px 24px 24px;
    }
  }
  @media ${query({ to: 'sm' })} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${CardTopFive} + ${CardTopFive} {
      margin: 0 24px 24px 24px;
    }
  }
`
