import Head from 'next/head'
import { useState } from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {



  return (
    <>
      <Head>
        <title>Contact | David C Brown</title>
        <meta name="description" content="Contact David C Brown." />
        <link rel="canonical" href="https://davidcbrown.io/contact" />
      </Head>
      <main className="flex flex-1 flex-col items-center justify-center mt-3">
        <h1 className="text-3xl font-bold mb-6 text-primary">Contact David</h1>
        <ContactForm />
      </main>
    </>
  )
}
