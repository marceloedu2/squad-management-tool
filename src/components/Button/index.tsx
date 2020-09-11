import React, { ButtonHTMLAttributes } from 'react'

import { ContainerButton } from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}
const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default React.memo(Button)
