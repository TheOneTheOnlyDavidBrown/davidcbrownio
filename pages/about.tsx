import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | David C Brown</title>
        <meta name="description" content="Learn more about David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/about" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">About Me</h1>
        <p className="text-lg text-dark">I'm David C Brown, a software engineer...</p>
        {/* ...more about you... */}
      </main>
    </>
  )
}
