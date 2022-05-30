import type { AppProps } from 'next/app'

import { SelectedIngredientsProvider } from '../context/state'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/homePage.css'
import '../styles/nav.css'
import '../styles/quiz.css'
import '../styles/selectedRecipe.css'
import '../styles/twilioInput.css'
import '../styles/results.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SelectedIngredientsProvider>
      <Component {...pageProps} />
    </SelectedIngredientsProvider>
  )
}

export default MyApp
