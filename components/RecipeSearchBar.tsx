import Router from 'next/router'
import { FC, FormEvent } from 'react'

import { formatQuery } from '../utils/helpers'

const RecipeSearchBar: FC = () => {
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const recipeSearch = formData.get('recipeSearch')
        const query = formatQuery({ userIngredients: [recipeSearch], time: '60 Minutes' })

        Router.push({
          pathname: '/results',
          query: { query },
        })
      }}
      className="pt-2 mr-20 pr-5 flex items-center"
    >
      <input
        name="recipeSearch"
        type="text"
        placeholder="chocolate chip cookies"
        className="h-10 rounded-lg border pl-2 m-2 w-72 "
      ></input>
      <button className="border p-1 h-10 w-20 rounded-lg bg-green-300">Search</button>
    </form>
  )
}

export default RecipeSearchBar
