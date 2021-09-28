import Router from 'next/router'

import { formatQuery } from '../utils/helpers'

const RecipeSearchBar = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const recipeSearch = formData.get('recipeSearch')
        const query = formatQuery({ ingredients: [recipeSearch], time: '60 Minutes' })

        Router.push({
          pathname: '/results',
          query: { query },
        })
      }}
    >
      <input
        name="recipeSearch"
        type="text"
        placeholder="chocolate chip cookies"
        className="h-10 rounded-lg border pl-2 m-2 w-72 "
      ></input>
      <button>Search</button>
    </form>
  )
}

export default RecipeSearchBar
