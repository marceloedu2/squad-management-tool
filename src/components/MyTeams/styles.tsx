import styled from 'styled-components'
import { query } from 'atomic-layout'

export const ContainerTeams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 817px;
  background-color: ${props => props.theme.colors.backgroundTwo};
  margin: 48px 24px 48px 48px;
  border-radius: 8px;
  > h1 {
    color: ${props => props.theme.colors.secondary};
    border-bottom: 2px solid ${props => props.theme.colors.background};
    padding: 28px;
  }
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 2px solid ${props => props.theme.colors.background};
  > h1 {
    color: ${props => props.theme.colors.secondary};
    margin-left: 28px;
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background-image: linear-gradient(
      to bottom,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.secondary}
    );
    margin: 0 28px 0 28px;
    box-shadow: 2px 2px 8px 3px rgba(0, 0, 0, 0.14);
    svg {
      font-size: 16px;
      color: ${props => props.theme.colors.background};
    }
  }
  @media ${query({ to: 'md' })} {
    max-width: 100%;
  }
  @media ${query({ to: 'sm' })} {
    width: 300px;
    max-width: 100%;
  }
`

export const ContentTeams = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  svg {
    font-size: 14px;
  }
  table {
    margin: 16px 8px 8px 8px;
    border-spacing: 0;
  }
  tr {
    text-align: left;
  }
  tr:hover {
    background: rgb(192, 15, 80, 0.2);
    border-radius: 8px;
    color: ${props => props.theme.colors.primary};
  }
  th,
  td {
    padding: 16px 32px 16px 32px;
    font-weight: 700;
  }
  th {
    background: ${props => props.theme.colors.backgroundTwo};
  }
  td {
    border-bottom: 1px solid ${props => props.theme.colors.background};
    span {
      font-weight: 400;
    }
  }
  td + td + td {
    display: block;
    text-align: right;
  }

  th:first-child {
    border-right: 1px solid ${props => props.theme.colors.background};
  }
  td:hover {
    border-bottom: 0;
  }

  tr:hover {
    td:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
  button {
    margin: 0 8px;
  }
  @media ${query({ to: 'md' })} {
    th + th,
    td + td {
      display: none;
    }
    td + td + td {
      display: block;
    }
    padding-bottom: 16px;
  }
  @media ${query({ to: 'sm' })} {
    th + th,
    td + td {
      display: none;
    }
    td + td + td {
      display: block;
    }
    padding-bottom: 16px;
  }
`
