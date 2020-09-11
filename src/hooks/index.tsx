import React from 'react'

import { FootballProvider } from './football'

import { FormationProvider } from './formation'

const AppProvider: React.FC = ({ children }) => {
  return (
    <FormationProvider>
      <FootballProvider>{children}</FootballProvider>
    </FormationProvider>
  )
}

export default AppProvider
