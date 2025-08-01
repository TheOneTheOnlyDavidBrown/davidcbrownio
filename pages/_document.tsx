import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Personal site of David C Brown" />
        <meta name="keywords" content="David C Brown, portfolio, projects, contact" />
        <meta name="author" content="David C Brown" />
        <link rel="canonical" href="https://davidcbrown.io/" />
        {/* ...other SEO tags... */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
