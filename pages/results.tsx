import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import Nav from '../components/Nav'
import RecipeCard from '../components/RecipeCard'
import { getRecipes } from '../utils/helpers'

const Results: FC = () => {
  const router = useRouter()
  const { query } = router.query
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const retrieveRecipes = async () => {
      try {
        const { hits } = await getRecipes(query)
        setRecipes(hits.slice(0, 6))
      } catch (error) {
        console.error(error)
      }
    }
    retrieveRecipes()
  }, [query])

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
