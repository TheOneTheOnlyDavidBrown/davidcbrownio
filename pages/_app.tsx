import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 m-4 mb-0">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
