import { useRouter } from 'next/router'

import { FC, useContext, useState } from 'react'

import { SelectedIngredientsContext } from '../context/state'

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
  const { calories, image, ingredientLines, label, totalTime, url } = recipe

  const { userIngredients } = useContext(SelectedIngredientsContext)
  // console.log('In SelectedRecipe', userIngredients)
  // console.log('In SelectedRecipe', ingredientLines)

  const handleClick = () => {
    //filter ingredientLines and userIngredients
    //You can either gather the missing ingredients
    //OR you can gather the ingrediends that the user has
    console.log('jajang')
  }

  return (
    <div className="flex flex-col w-screen">
      {label}
      <img className="w-1/4" src={image} />
      Calories: {calories}
      Total Cooking Time: {totalTime}
      {ingredientLines.map((line) => {
        return <div className="w-1/3 border-2 border-red-300">{line}</div>
      })}
      <button className="w-36 bg-red-300" onClick={() => handleClick()}>
        Show me my missing ingredients!
      </button>
      <button className="w-36 bg-green-400">
        <a href={url}>Go To Recipe</a>
      </button>
    </div>
  )
}
export default SelectedRecipe
