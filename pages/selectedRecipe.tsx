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

  const [combinedIngredients, setCombinedIngredients] = useState(null)

  let { userIngredients } = useContext(SelectedIngredientsContext)

  userIngredients = userIngredients.map((ingredient) => ingredient.toLowerCase())

  ingredientLines = ingredientLines?.map((ingredient) => ingredient.toLowerCase())

  const handleClick = () => {
    const newIngredients = combinedIngredients.map((item) => {
      userIngredients.forEach((ingredient) => {
        if (!item.ingredientName.includes(ingredient)) {
          item.ingredientStyle = ' w-1/3 border-2 bg-red-300'
        }
      })
      return item
    })

    setCombinedIngredients(newIngredients)
  }

  useEffect(() => {
    const test = ingredientLines?.map((line) => {
      return {
        ingredientName: line.toLowerCase(),
        ingredientStyle: 'w-1/3 border-2 border-red-300',
      }
    })
    setCombinedIngredients(test)
  }, [recipe])

  return (
    <div className="flex flex-col w-screen">
      <Nav />
      {label}
      <img className="w-1/4" src={image} />
      Calories: {calories}
      Total Cooking Time: {totalTime}
      {combinedIngredients?.map((line, index) => {
        return (
          <div key={`${line.ingredienName}_${index}`} className={line.ingredientStyle}>
            {line.ingredientName}
          </div>
        )
      })}
      <button className="w-36 bg-red-300" onClick={() => handleClick()}>
        Show me my missing ingredients!
      </button>
      <button className="w-36 bg-green-400">
        <a href={url}>Go To Recipe</a>
      </button>
      <button className="w-36 bg-blue-400">
        <a href={url}>Text the missing ingredients to your phone!</a>
      </button>
    </div>
  )
}
export default SelectedRecipe
