import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>

      <div className="py-6">
        <Link href="/liff" className="p-4">
          liff
        </Link>
        <Link href="/woff" className="p-4">
          woff
        </Link>
      </div>
    </>
  )
}

export default TopPage
