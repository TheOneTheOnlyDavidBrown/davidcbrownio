import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | David C Brown</title>
        <meta name="description" content="Projects by David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/projects" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-700">Here are some of my projects.</p>
        {/* ...project list... */}
      </main>
    </>
  )
}
