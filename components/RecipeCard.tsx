import Router from 'next/router'
import Image from 'next/image'

import React, { FC } from 'react'

interface RecipeCardProps {
  recipe: {
    url: string
    image: string
    label: string
  }
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const handleClick = () => {
    Router.push({
      pathname: '/selectedRecipe',
      query: recipe,
    })
  }

  return (
    <button onClick={() => handleClick()}>
      <div className="flex flex-col h-80 bg-opacity-50 bg-gray-100 hover:bg-yellow-100 w-80 mr-4 ml-4 pb-4 border rounded-xl">
        <Image
          className="rounded-t-xl"
          src={recipe.image}
          alt={'Image for' + recipe.label}
          height={400}
          width={400}
          loader={() => recipe.image}
        />
        <label className="mt-4 p-2 cursor-pointer">{recipe.label}</label>
      </div>
    </button>
  )
}

export default RecipeCard
