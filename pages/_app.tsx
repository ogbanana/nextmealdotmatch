import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { SelectedIngredientsProvider } from '../context/state'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/homePage.css'
import '../styles/nav.css'
import '../styles/quiz.css'
import '../styles/selectedRecipe.css'
import '../styles/twilioInput.css'
import '../styles/results.css'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectedIngredientsProvider>
        <Component {...pageProps} />
      </SelectedIngredientsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
