import 'tailwindcss/tailwind.css'
import '~/styles/globals.scss'
import '~/shared/firebase/app'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { AuthProvider } from '~/contexts/AuthContext'
import { DefaultLayout } from '~/layouts/Default'
import { ApiClient, ApiClientContext } from '~/shared/api/context'
import { SnackbarProvider } from '~/shared/components/Snackbar/Context'
import { SITE_TITLE } from '~/shared/constants/base'

const apiClient = new ApiClient()

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      <Script src="https://yubinbango.github.io/yubinbango-core/yubinbango-core.js" />

      <ApiClientContext.Provider value={apiClient}>
        <AuthProvider>
          <SnackbarProvider>
            <DefaultLayout>
              <Component {...pageProps} key={router.asPath} />
            </DefaultLayout>
          </SnackbarProvider>
        </AuthProvider>
      </ApiClientContext.Provider>
    </>
  )
}
