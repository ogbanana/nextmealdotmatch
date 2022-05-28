import { FC, useContext, useState } from 'react'

import { SelectedIngredientsContext } from '../context/state'

const SelectedRecipe: FC = () => {
  const { userIngredients } = useContext(SelectedIngredientsContext)

  console.log('In SelectedRecipe', userIngredients)

  return (
    <>
      {userIngredients.map((ingredient) => {
        return <span>{ingredient}</span>
      })}
    </>
  )
}
export default SelectedRecipe
