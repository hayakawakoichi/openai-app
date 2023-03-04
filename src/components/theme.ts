import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {},
  typography: {
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '2rem',
      lineHeight: '1.75',
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.75',
    },
    h3: {
      fontSize: '1.2rem',
      lineHeight: '1.75',
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    h5: {
      fontSize: '0.857rem',
      lineHeight: '1.5',
    },
    h6: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
})
