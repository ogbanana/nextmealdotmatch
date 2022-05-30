import { useRouter } from 'next/router'

import { FC, useContext, useEffect, useState } from 'react'

import { SelectedIngredientsContext } from '../context/state'

import Nav from '../components/Nav'

interface Recipe {
  calories: string
  image: string
  ingredientLines: string[]
  label: string
  totalTime: string
  url: string
}

const SelectedRecipe: FC = () => {
  const router = useRouter()
  const recipe = router.query as unknown as Recipe
  let { calories, image, ingredientLines, label, totalTime, url } = recipe
  let { userIngredients } = useContext(SelectedIngredientsContext)
  const [ingredientsRenderData, setingredientsRenderData] = useState(null)

  userIngredients = userIngredients.map((ingredient) => ingredient.toLowerCase())
  ingredientLines = ingredientLines?.map((ingredient) => ingredient.toLowerCase())

  const handleClick = () => {
    const updatedIngredientsObj = ingredientsRenderData.map((recipeIngredientObj) => {
      const ingredientFound = userIngredients.find((item) =>
        recipeIngredientObj.ingredientName.includes(item),
      )

      if (!ingredientFound) {
        recipeIngredientObj.ingredientContainerStyle = 'p-2 m-1 w-96 rounded-xl bg-red-300'
      }

      return recipeIngredientObj
    })

    setingredientsRenderData(updatedIngredientsObj)
  }

  useEffect(() => {
    const ingredientsRenderObject = ingredientLines?.map((line) => {
      return {
        ingredientName: line.toLowerCase(),
        ingredientContainerStyle: 'p-2 m-1 w-96',
      }
    })
    setingredientsRenderData(ingredientsRenderObject)
  }, [recipe])

  return (
    <div id="selectedRecipePage">
      <Nav />
      <div id="selectedRecipeContainer">
        <div id="selectedRecipeInfoPanel">
          <a href={url} target="blank">
            <h1>{label}</h1>
          </a>
          <a href={url} target="blank">
            <img className="w-full" src={image} />
          </a>
          <label>Calories</label>
          <p>{calories}</p>
          <label>Total Cooking Time</label>
          <p>{totalTime}</p>
        </div>

        <div id="selectedRecipeIngredientsPanel">
          <div id="selectedRecipeIngredients">
            {ingredientsRenderData?.map((line, index) => {
              return (
                <div
                  key={`${line.ingredienName}_${index}`}
                  className={line.ingredientContainerStyle}
                >
                  • {line.ingredientName}
                </div>
              )
            })}
          </div>
          <div id="selectedRecipeButtonsContainer">
            <div>
              <button
                className="selectedRecipeButtons bg-red-300 hover:bg-red-400"
                onClick={() => handleClick()}
              >
                Show me my missing ingredients!
              </button>
            </div>
            <div>
              <button className="selectedRecipeButtons bg-blue-300 hover:bg-blue-400">
                <a href={url}>Text the missing ingredients to your phone!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedRecipe
