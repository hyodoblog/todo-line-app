import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { routes } from '~/constants/routes'

const Status404: NextPage = () => {
  const title = 'ページが見つかりませんでした'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="flex h-full min-h-screen items-center justify-center">
        <div className="text-primary">
          <div className="mb-4">{title}</div>
          <div className="text-center">
            <Link href={routes.top}>トップページへ</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Status404
