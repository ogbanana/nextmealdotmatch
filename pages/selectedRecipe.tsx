import { FC, useContext, useState } from 'react'

import { SelectedIngredientsContext } from '../context/state'

const SelectedRecipe: FC = () => {
  const { userIngredients } = useContext(SelectedIngredientsContext)

  console.log('In SelectedRecipe', userIngredients)
  return <>YOOO</>
}
export default SelectedRecipe
