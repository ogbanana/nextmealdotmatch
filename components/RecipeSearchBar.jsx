import react from 'react'
import getRecipes from '../utils/helpers'

const RecipeSearchBar = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const recipeSearch = formData.get('recipeSearch')
        getRecipes(recipeSearch)
      }}
      // className="h-5"
    >
      <input
        name="recipeSearch"
        type="text"
        placeholder="chocolate chip cookies"
        className="h-10 rounded-lg border p-1 m-2"
      ></input>
      <button>Search</button>
    </form>
  )
}

export default RecipeSearchBar
