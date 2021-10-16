// import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="min-h-96 w-60 mr-4 ml-4 pb-4 border rounded-xl">
      <img
        className="rounded-t-xl"
        src={recipe.image}
        alt={'Image for' + recipe.label}
        layout="fill"
      />
      <label className="mt-4">{recipe.label}</label>
    </div>
  )
}

export default RecipeCard
