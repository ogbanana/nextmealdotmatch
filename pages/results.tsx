import { useRouter } from 'next/router'

import React, { FC, useEffect, useState } from 'react'

import Nav from '../components/Nav'
import RecipeCard from '../components/RecipeCard'

const Results: FC = () => {
  const router = useRouter()
  const { foodQuery } = router.query
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const retrieveRecipes = async () => {
      try {
        const recipes = await fetch('/api/getRecipes', {
          body: JSON.stringify({ foodQuery }),
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })

        const { hits } = await recipes.json()
        setRecipes(await hits.slice(0, 6))
      } catch (error) {
        console.error(error)
      }
    }
    retrieveRecipes()
  }, [foodQuery])

  return (
    <>
      <Nav />
      <div className=" h-full min-h-screen bg-basil-image bg-cover bg-no-repeat">
        <div className="h-full min-h-screen  bg-warmGray-200 bg-opacity-70 flex justify-center">
          <div className="h-full flex flex-wrap items-center justify-center pt-6 mt-24">
            {recipes?.length
              ? recipes.map((current) => {
                  return (
                    <div className="mb-16" key={current.recipe.label}>
                      <RecipeCard recipe={current.recipe} />
                    </div>
                  )
                })
              : 'Matching your ingredients with recipes...'}
          </div>
        </div>
      </div>
    </>
  )
}

export default Results
