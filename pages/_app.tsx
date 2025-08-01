import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className='bg-neutral'>

      <Component {...pageProps} />
      </div>
    </>
  )
}
