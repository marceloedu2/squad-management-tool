import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.colors.background};
    font: 400 16px Roboto, sans-serif;
  }
  body, input, button {
    font: 16px 'Roboto', sans-serif;
    color: ${props => props.theme.colors.text};
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  div {
    cursor: default;
  }
  h1{
    cursor: default;
  }
  h2{
    cursor: default;
  }
  h3{
    cursor: default;
  }
  h4{
    cursor: default;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  table{
    cursor: default;
  }
`
