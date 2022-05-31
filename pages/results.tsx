import { useRouter } from 'next/router'

import React, { FC } from 'react'
import { useQuery } from 'react-query'

import Nav from '../components/Nav'
import RecipeCard from '../components/RecipeCard'
import { Recipe } from './selectedRecipe'
interface RecipeData {
  recipe: Recipe
}

const Results: FC = () => {
  const router = useRouter()
  const { foodQuery } = router.query

  const { data, isLoading, isError } = useQuery<RecipeData[]>(
    ['getRecipes', foodQuery],
    async () => {
      const recipes = await fetch('/api/getRecipes', {
        body: JSON.stringify({ foodQuery }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      const { hits } = await recipes.json()
      return hits.slice(0, 6)
    },
    {
      refetchOnMount: false,
    },
  )

  const displayRecipeList = () => {
    if (isError) {
      return <div className="text-red-700">There was an error fetching recipes</div>
    }

    if (isLoading) {
      return 'Matching your ingredients with recipes...'
    }

    if (data?.length) {
      return data.map((current) => {
        return (
          <div
            className="mb-16 recipeList:basis-1/3 recipeList:w-1/3 flex justify-center sm:basis-full sm:w-full"
            key={current.recipe.label}
          >
            <RecipeCard recipe={current.recipe} />
          </div>
        )
      })
    }
  }

  return (
    <>
      <Nav />
      <div id="resultsContainer">
        <div id="resultsInnerContainer">
          <div id="recipesContainer">{displayRecipeList()}</div>
        </div>
      </div>
    </>
  )
}

export default Results
