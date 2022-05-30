import { useRouter } from 'next/router'

import { FC, useContext, useEffect, useState } from 'react'

import { SelectedIngredientsContext } from '../context/state'

import Nav from '../components/Nav'
import TwilioInput from '../components/TwilioInput'

interface Recipe {
  calories: string
  image: string
  ingredientLines: string[]
  label: string
  totalTime: string
  url: string
}

export interface IngredientRender {
  ingredientName: string
  ingredientContainerStyle: string
  isMissing: boolean
}

const SelectedRecipe: FC = () => {
  const router = useRouter()
  const recipe = router.query as unknown as Recipe
  let { calories, image, ingredientLines, label, totalTime, url } = recipe
  let { userIngredients } = useContext(SelectedIngredientsContext)
  const [ingredientsRenderData, setingredientsRenderData] = useState<null | IngredientRender[]>(
    null,
  )
  const [showTextButton, setShowTextButton] = useState(false)
  const [showTwilioInput, setShowTwilioInput] = useState(false)
  const [highlightIngredients, setHighlightIngredients] = useState(true)

  userIngredients = userIngredients.map((ingredient) => ingredient.toLowerCase())
  ingredientLines = ingredientLines?.map((ingredient) => ingredient.toLowerCase())

  const handleMissingIngredientsButton = () => {
    const updatedIngredientsObj = ingredientsRenderData.map(
      (recipeIngredientObj: IngredientRender) => {
        const ingredientFound = userIngredients.find((item) =>
          recipeIngredientObj.ingredientName.includes(item),
        )

        if (!highlightIngredients) {
          recipeIngredientObj.ingredientContainerStyle = 'p-2 m-1 w-96'
          setHighlightIngredients(true)
        }

        if (!ingredientFound && highlightIngredients) {
          recipeIngredientObj.ingredientContainerStyle = 'p-2 m-1 w-96 rounded-xl bg-red-300'
          recipeIngredientObj.isMissing = true
          setHighlightIngredients(false)
        }

        return recipeIngredientObj
      },
    )

    setingredientsRenderData(updatedIngredientsObj)
    setShowTextButton(true)
  }

  useEffect(() => {
    const ingredientsRenderObject = ingredientLines?.map((line) => {
      return {
        ingredientName: line.toLowerCase(),
        ingredientContainerStyle: 'p-2 m-1 w-96',
        isMissing: false,
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
                  key={`${line.ingredientName}_${index}`}
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
                className="selectedRecipeButtons bg-red-200 hover:bg-red-300 active:bg-red-400 focus:bg-red-400 focus:outline-none focus:ring focus:ring-red-300"
                onClick={() => handleMissingIngredientsButton()}
              >
                Show me my missing ingredients!
              </button>
            </div>
            <div>
              {showTextButton && (
                <button
                  className="selectedRecipeButtons bg-blue-300 hover:bg-blue-400"
                  onClick={() => setShowTwilioInput(!showTwilioInput)}
                >
                  Text the missing ingredients to your phone!
                  {showTwilioInput && (
                    <TwilioInput
                      missingIngredients={ingredientsRenderData.filter(
                        (item) => item.isMissing === true,
                      )}
                    />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedRecipe
