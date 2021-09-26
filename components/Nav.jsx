import react from 'react'
import RecipeSearchBar from './RecipeSearchBar'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between">
      <div> Meal.Match </div>
      <RecipeSearchBar />
    </nav>
  )
}

export default Nav
