import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { SelectedIngredientsProvider } from '../context/state'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import '../styles/pageStyles/homePage.css'
import '../styles/pageStyles/quiz.css'
import '../styles/pageStyles/results.css'
import '../styles/pageStyles/selectedRecipe.css'

import '../styles/componentStyles/nav.css'
import '../styles/componentStyles/twilioInput.css'
import '../styles/componentStyles/recipeSearchBar.css'
import '../styles/componentStyles/timeAndFoodQuestions.css'

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
