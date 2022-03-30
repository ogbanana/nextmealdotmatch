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
  return (
    <a href={recipe.url}>
      <div className="min-h-96 w-60 mr-4 ml-4 pb-4 border rounded-xl">
        <Image
          className="rounded-t-xl"
          src={recipe.image}
          alt={'Image for' + recipe.label}
          height={400}
          width={400}
          loader={() => recipe.image}
        />
        <label className="mt-4">{recipe.label}</label>
      </div>
    </a>
  )
}

export default RecipeCard