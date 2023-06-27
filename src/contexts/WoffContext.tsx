'use client'

import Script from 'next/script'
import { createContext, useState } from 'react'
import { WoffProfile } from '~/types/woff'

class WoffContextProps {
  isLogIn = false
  isError = false
  profile: WoffProfile | null = null
  refetch: () => Promise<void> = async () => {
    //
  }
  setError: (error: Error | null) => void = () => {}
  error: Error | null = null
}

export const WoffContext = createContext<WoffContextProps>(new WoffContextProps())

type Props = {
  children: React.ReactNode
}

export const WoffProvider = ({ children }: Props) => {
  const [profile, setProfile] = useState<WoffProfile | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const isLogIn = !!profile
  const isError = !!error

  const refetch = async () => {
    //
  }

  const lineLogin = async (): Promise<void> => {
    const _profile = await woff.getProfile()
    setProfile(_profile)
  }

  const WoffInit = async () => {
    const handleError = (err: any) => {
      console.error(err)
      setError(err)
    }

    try {
      await woff.init({ woffId: 'a7QSnsuaY9auXK9WDCILHw' })

      await lineLogin()
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <WoffContext.Provider
      value={{
        isLogIn,
        isError,
        refetch,
        profile,
        setError,
        error
      }}
    >
      <Script
        src="https://static.worksmobile.net/static/wm/woff/edge/3.6/sdk.js"
        onLoad={WoffInit}
      />
      {children}
    </WoffContext.Provider>
  )
}
