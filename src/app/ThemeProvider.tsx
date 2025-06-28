'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { theme } from '@/theme'

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const muiTheme = createTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

