import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | David C Brown</title>
        <meta name="description" content="Contact David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/contact" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-gray-700">Feel free to reach out via email: <a href="mailto:me@davidcbrown.io" className="text-blue-600 underline">me@davidcbrown.io</a></p>
        {/* ...contact form or info... */}
      </main>
    </>
  )
}
