import { FC, ReactNode } from 'react'

import { Box, Container, Typography } from '@mui/material'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ padding: 1, background: '#f2f2f2' }}>
        <Typography variant="h1">OpenAI Sample App</Typography>
      </Box>
      <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
        <>{children}</>
      </Container>
      <Box sx={{ padding: 1, background: '#f2f2f2' }}>
        <Typography>Footer</Typography>
      </Box>
    </>
  )
}
