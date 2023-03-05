import { FC, useCallback } from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

import { Page } from '@/components/page/page'

export const TopPage: FC = () => {
  const router = useRouter()

  const onClickSampleADescriptionCard = useCallback(() => {
    router.push('/sample-a')
  }, [router])

  return (
    <Page title="Top">
      <Typography variant="h1" sx={{ marginY: 2 }}>
        This is a sample app using OpenAI API.
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardActionArea onClick={onClickSampleADescriptionCard}>
              <CardHeader
                title="URLの中身教えてくれる君"
                subheader="using chat completion"
              />
              <CardMedia component="img" height={200} image="/sample-a.png" />
              <CardContent sx={{ borderTop: '1px solid lightgray' }}>
                <Typography>
                  URL先に書かれている内容を要約してくれます。英語で書かれている記事をサクッと確認したいときに是非。
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="鋭意開発中。。。" />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="鋭意開発中。。。" />
          </Card>
        </Grid>
      </Grid>
    </Page>
  )
}
