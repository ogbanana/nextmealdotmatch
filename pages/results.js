import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import Nav from '../components/Nav'
import RecipeCard from '../components/RecipeCard'
import { getRecipes } from '../utils/helpers'

const Results = () => {
  const router = useRouter()
  const { query } = router.query
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const retrieveRecipes = async () => {
      const { hits } = await getRecipes(query)
      setRecipes([...hits])
    }
    retrieveRecipes()
  }, [query])

  return (
    <div>
      <Nav />
      <div className="w-screen flex justify-center">
        <div className="w-10/12 h-auto flex flex-wrap items-center justify-center">
          {recipes.length > 0
            ? recipes.map((current, index) => {
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
  )
}

export default Results
