import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '@/styles/configs/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/configs/theme'
import AppProvider from '@/hooks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HTML5BackendContext } from 'react-dnd-html5-backend/lib/types'

interface IAppProps extends AppProps {
  backend: HTML5BackendContext
}

const MyApp: React.FC<IAppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Component {...pageProps} />
          <GlobalStyle />
        </DndProvider>
      </ThemeProvider>
    </AppProvider>
  )
}

export default MyApp
