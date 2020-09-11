import styled from 'styled-components'

export const ContainerButton = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  background-image: linear-gradient(
    to left,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  color: ${props => props.theme.colors.background};
`
