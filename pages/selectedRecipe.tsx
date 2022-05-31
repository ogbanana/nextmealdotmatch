import { useRouter } from 'next/router'

import { FC, useContext, useEffect, useState, MouseEvent } from 'react'

import { SelectedIngredientsContext } from '../context/state'

import Nav from '../components/Nav'
import TwilioInput from '../components/TwilioInput'

export interface Recipe {
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
          recipeIngredientObj.ingredientContainerStyle = 'ingredientLine'
          setHighlightIngredients(true)
        }

        if (!ingredientFound && highlightIngredients) {
          recipeIngredientObj.ingredientContainerStyle =
            'm-1 p-1 pl-4 w-auto rounded-lg text-sm md:rounded-xl bg-red-300 md:p-2 md:w-full'
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
        ingredientContainerStyle: 'ingredientLine',
        isMissing: false,
      }
    })
    setingredientsRenderData(ingredientsRenderObject)
  }, [recipe])

  const handleTwilioClick = (event: MouseEvent<HTMLDivElement>) => {
    const div = event.target as HTMLDivElement

    if (div.id === 'phoneNumberInput' || div.id === 'sendTextButton') {
      return
    }

    setShowTwilioInput(!showTwilioInput)
  }

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
            <label className="text-center text-lg font-semibold">Ingredients</label>
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
                className="selectedRecipeButtons "
                onClick={() => handleMissingIngredientsButton()}
              >
                Show me my missing ingredients!
              </button>
            </div>
            <div>
              {showTextButton && (
                <div>
                  <div className="selectedRecipeButtons" onClick={handleTwilioClick}>
                    <label>Text the missing ingredients to your phone!</label>
                    {showTwilioInput && (
                      <TwilioInput
                        missingIngredients={ingredientsRenderData.filter(
                          (item) => item.isMissing === true,
                        )}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectedRecipe
