import 'regenerator-runtime/runtime'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { LiffProvider } from '~/contexts/LiffContext'
import { SITE_TITLE } from '~/constants/base'

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      <LiffProvider>
        <Component {...pageProps} key={router.asPath} />
      </LiffProvider>
    </>
  )
}
