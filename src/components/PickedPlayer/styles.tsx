import styled from 'styled-components'
import { query } from 'atomic-layout'

import lineSoccer from '@/assets/LineSoccerpng.png'

export const DivAvatar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    color: ${props => props.theme.colors.backgroundTwo};
  }
  > h4 {
    color: ${props => props.theme.colors.backgroundTwo};
    margin: 16px -160px -16px 0;
    width: 60px;
    padding-bottom: 6px;
    border-bottom: 1px solid ${props => props.theme.colors.backgroundTwo};
  }
  img {
    width: 140px;
    border-radius: 50%;
    margin: 6px;
    border: 3px solid ${props => props.theme.colors.primary};
  }

  @media ${query({ to: 'sm' })} {
    > h2 {
      text-align: center;
    }
    > h4 {
      margin: 16px -16px 16px 16px;
    }
  }
`
export const ContentPickedPlayer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 352px;
  margin: 24px 48px 48px 24px;
  border-radius: 8px;
  background-image: linear-gradient(
    to bottom,
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${lineSoccer});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  ${DivAvatar}:first-child {
    img {
      border: 3px dashed ${props => props.theme.colors.secondary};
    }
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
