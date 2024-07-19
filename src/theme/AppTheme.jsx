import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        {/* da un punto de entrada para que
        diferentes navegadores web rendericen de forma parecida  */}
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
