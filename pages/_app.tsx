import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-neutral h-screen overflow-y-auto" >
      <Navbar />
      <div className="m-4">
      <Component {...pageProps} />
      </div>
    </div>
  )
}
