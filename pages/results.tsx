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
        const hitsCopy = [...hits]
        const topEight = hitsCopy.splice(0, 6)
        setRecipes(topEight)
      } catch (error) {
        console.error(error)
      }
    }
    retrieveRecipes()
  }, [query])

  return (
    <div>
      <Nav />
      <div className="w-screen h-screen  bg-basil-image bg-cover bg-no-repeat">
        <div className="w-screen h-full bg-warmGray-200 bg-opacity-70 flex justify-center">
          <div className="w-7/12 h-full flex flex-wrap items-center justify-center pt-6">
            {recipes?.length
              ? recipes.map((current) => {
                  return (
                    <div key={current.recipe.label}>
                      <RecipeCard recipe={current.recipe} />
                    </div>
                  )
                })
              : 'Matching your ingredients with recipes...'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
