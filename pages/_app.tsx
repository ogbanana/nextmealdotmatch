import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/quiz.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
