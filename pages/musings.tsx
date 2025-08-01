import Head from 'next/head'

export default function Musings() {
  return (
    <>
      <Head>
        <title>Musings | David C Brown</title>
        <meta name="description" content="Thoughts, essays, and musings by David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/musings" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Musings</h1>
        <p className="text-lg text-gray-700 mb-8">Thoughts, essays, and reflections.</p>
        {/* ...list or content of musings... */}
      </main>
    </>
  )
}
