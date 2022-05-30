import Router from 'next/router'
import { FC, FormEvent, useEffect, useState } from 'react'

import { formatQuery } from '../utils/helpers'

interface Props {
  hamburgerMenuButtonWasClicked: boolean
  setHamburgerMenuButtonWasClicked: (status: boolean) => void
}

const RecipeSearchBar: FC<Props> = ({
  hamburgerMenuButtonWasClicked,
  setHamburgerMenuButtonWasClicked,
}) => {
  const [windowSize, setWindowSize] = useState(0)

  const windowIsSmallAndButtonWasClicked =
    (windowSize <= 768 && hamburgerMenuButtonWasClicked) || windowSize > 768

  useEffect(() => {
    if (window) {
      if (window.innerWidth > 768) {
        setHamburgerMenuButtonWasClicked(true)
        setWindowSize(window.innerWidth)
      }

      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          setHamburgerMenuButtonWasClicked(false)
        }
        setWindowSize(window.innerWidth)
      })
    }
    return () => {
      window.removeEventListener('reset', () => {})
    }
  }, [])

  return (
    <div className={windowIsSmallAndButtonWasClicked ? 'flex' : 'hidden'}>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault()

          const formData = new FormData(event.currentTarget)
          const recipeSearch = formData.get('recipeSearch').toString()
          const foodQuery = formatQuery({ userIngredients: [recipeSearch], userTime: '60 Minutes' })

          Router.push({
            pathname: '/results',
            query: { foodQuery },
          })
        }}
        id="searchBarContainer"
      >
        <div className="flex items-start md:items-center md:flex-row flex-col">
          <input
            name="recipeSearch"
            type="text"
            placeholder="chocolate chip cookies"
            className="h-10 rounded-lg border pl-2 m-2 md:w-72 w-full "
          ></input>
          <button className="border p-1 h-10 w-20 rounded-lg bg-green-300 ml-2 mb-2 md:mb-0">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default RecipeSearchBar
