import React from 'react'
import { ContainerTooltip } from './styles'

const Tooltip = ({ children, content }) => {
  return (
    <ContainerTooltip
      content={content}
      padding={8}
      radius={4}
      style={{ fontWeight: 400 }}
    >
      {children}
    </ContainerTooltip>
  )
}

export default React.memo(Tooltip)
