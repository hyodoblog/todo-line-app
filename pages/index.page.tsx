import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TopPage: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>

      <div>
        <Link href="/liff" className="p-4">
          liff
        </Link>
        <Link href="/woff">woff</Link>
      </div>
    </>
  )
}

export default TopPage
