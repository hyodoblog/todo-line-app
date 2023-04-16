'use client'

import { LiffContext, LiffProvider } from '~/contexts/LiffContext'
import './globals.css'
import Head from 'next/head'
import { useContext } from 'react'
import { Loader } from '~/components/Loader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLogIn } = useContext(LiffContext)

  return (
    <html lang="ja">
      <Head>
        <title></title>
      </Head>

      <LiffProvider>
        <body>{isLogIn ? children : <Loader />}</body>
      </LiffProvider>
    </html>
  )
}
