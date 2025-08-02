import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Error({ statusCode }: { statusCode?: number }) {
  const router = useRouter()

  useEffect(() => {
    if (statusCode === 404) {
      router.replace('/')
    }
  }, [statusCode, router])

  // Optionally render nothing or a loading spinner
  return null
}

// For Next.js to pass statusCode
Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
