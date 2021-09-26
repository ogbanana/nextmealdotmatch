import react from 'react'
import RecipeSearchBar from './RecipeSearchBar'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between border-b">
      <div className="text-4xl p-2 text-center"> Meal.Match </div>
      <RecipeSearchBar />
    </nav>
  )
}

export default Nav
