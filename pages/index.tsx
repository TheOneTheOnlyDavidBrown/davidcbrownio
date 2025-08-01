import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>David C Brown | Personal Site</title>
        <meta name="description" content="Welcome to the personal site of David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">David C Brown</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome to my personal site.</p>
        {/* ...navigation links... */}
      </main>
    </>
  )
}
