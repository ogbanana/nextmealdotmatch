import type { AppProps } from 'next/app'

import { SelectedIngredientsProvider } from '../context/state'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/quiz.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SelectedIngredientsProvider>
      <Component {...pageProps} />
    </SelectedIngredientsProvider>
  )
}

export default MyApp
