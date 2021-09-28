// import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="h-72 w-60 m-4 pb-4 border rounded-xl">
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
