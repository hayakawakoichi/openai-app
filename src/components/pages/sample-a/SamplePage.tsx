import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'

import { Box, Button, Skeleton, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { ChatCompletionResponseMessage } from 'openai'
import useSWR from 'swr'

import { Page } from '@/components/page/page'

const PROMPT = `
あなたはユーザーからURLを受け取ります。
そのURLに記載されている内容を、実際の記事よりも更にわかりやすく、詳細に解説する文章を生成してください。
`

type CompletionResponse = {
  id: string
  object: 'chat.completion'
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: [
    {
      message: ChatCompletionResponseMessage
      finish_reason: string
      index: 0
    }
  ]
}

export const SamplePage: FC = () => {
  const { onChangeInput, onClickSendButton, data, isLoading } = useOpenai()

  return (
    <Page title="URLの内容解釈くん">
      <Typography variant="h1" sx={{ marginY: 2 }}>
        リンク先に書かれている内容を要約します。
      </Typography>

      <Box sx={{ display: 'flex' }}>
        <TextField fullWidth label="url" onChange={onChangeInput} />
        <Button sx={{ marginLeft: 1 }} onClick={onClickSendButton}>
          送信
        </Button>
      </Box>
      <Box>
        {isLoading && (
          <Skeleton variant="rectangular" height={500} sx={{ marginY: 1 }} />
        )}
      </Box>

      <Box sx={{ marginY: 2 }}>
        {data &&
          data.choices[0].message.content.split('\n').map((v) => (
            <>
              {v}
              <br />
            </>
          ))}
      </Box>
    </Page>
  )
}

const useOpenai = () => {
  const [input, setInput] = useState('')
  const [shouldFetch, setShouldFetch] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const onClickSendButton = useCallback(() => {
    if (!input) {
      enqueueSnackbar('URLを入力してください', { variant: 'warning' })
      return
    }
    setShouldFetch(true)
  }, [enqueueSnackbar, input])

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setInput(e.target.value),
    []
  )

  const fetcher = (url: string) =>
    axios
      .post(
        url,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: PROMPT },
            { role: 'user', content: input },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      )
      .then((res) => res.data)

  useEffect(() => {
    setShouldFetch(false)
  }, [input])

  const { data, isLoading, error } = useSWR<CompletionResponse>(
    shouldFetch ? 'https://api.openai.com/v1/chat/completions' : null,
    fetcher
  )

  return {
    onChangeInput,
    onClickSendButton,
    data,
    isLoading,
    error,
  }
}
