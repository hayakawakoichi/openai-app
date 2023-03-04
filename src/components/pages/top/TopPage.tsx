import { FC } from 'react'

import { Typography } from '@mui/material'

import { Page } from '@/components/page/page'

export const TopPage: FC = () => {
  return (
    <Page title="Top">
      <Typography variant="h1">top</Typography>
    </Page>
  )
}
