import { Head, Html, Main, NextScript } from 'next/document'

import { SITE_TITLE } from '~/constants/base'

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content={SITE_TITLE} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
