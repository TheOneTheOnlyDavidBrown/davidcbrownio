import Head from 'next/head'

export default function Musings() {
  return (
    <>
      <Head>
        <title>Musings | David C Brown</title>
        <meta name="description" content="Thoughts, essays, and musings by David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/musings" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">Musings</h1>
        <p className="text-lg text-dark mb-8">Thoughts, essays, and reflections.</p>
        {/* ...list or content of musings... */}
      </main>
    </>
  )
}
