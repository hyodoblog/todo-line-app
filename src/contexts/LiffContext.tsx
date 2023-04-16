'use client'

import { Profile } from '@liff/get-profile'
import { liff } from '@line/liff'
import { LiffMockPlugin } from '@line/liff-mock'
import Script from 'next/script'
import { createContext, useState } from 'react'

const liffId = process.env.NEXT_PUBLIC_LINE_LIFF_ID!

class LiffContextProps {
  isLogIn = false
  isError = false
  profile: Profile | null = null
  refetch: () => Promise<void> = async () => {
    //
  }
  setError: (error: Error | null) => void = () => {}
  error: Error | null = null
}

export const LiffContext = createContext<LiffContextProps>(new LiffContextProps())

type Props = {
  children: React.ReactNode
}

export const LiffProvider = ({ children }: Props) => {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const isLogIn = !!profile
  const isError = !!error

  const refetch = async () => {
    //
  }

  const lineLogin = async (): Promise<void> => {
    const accessToken = liff.getAccessToken()!

    setProfile(await liff.getProfile())
  }

  const liffInit = async () => {
    const handleError = (err: any) => {
      console.error(err)
      setError(err)
    }

    try {
      if (process.env.NODE_ENV === 'development') {
        liff.use(new LiffMockPlugin())
        // @ts-ignore
        await liff.init({ liffId, mock: true })
        liff.login()
      } else {
        await liff.init({ liffId })
      }

      // web browser login
      if (process.env.NODE_ENV !== 'development' && !liff.isInClient() && !liff.isLoggedIn()) {
        return
      }

      await lineLogin()
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <LiffContext.Provider
      value={{
        isLogIn,
        isError,
        refetch,
        profile,
        setError,
        error
      }}
    >
      <Script src="https://static.line-scdn.net/liff/edge/2/sdk.js" onLoad={liffInit} />
      {children}
    </LiffContext.Provider>
  )
}
