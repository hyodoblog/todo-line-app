import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { LiffContext } from '~/contexts/LiffContext'
import { routes } from '~/constants/routes'
import { TopContent } from './Top/Content'

const TopPage: NextPage = () => {
  const { isLogIn } = useContext(LiffContext)
  const router = useRouter()

  useEffect(() => {
    if (isLogIn) {
      router.push(routes.top)
    }
  }, [isLogIn, router])

  if (!isLogIn) {
    return (
      <>
        <Head>
          <title>認証中</title>
        </Head>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>

      <TopContent />
    </>
  )
}

export default TopPage
