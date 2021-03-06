import Router from 'next/router'
import { FC, FormEvent, ReactNode, useEffect, useState } from 'react'

import { formatQuery } from '../utils/helpers'

interface Props {
  hamburgerMenuButtonWasClicked: boolean
  setHamburgerMenuButtonWasClicked: (status: boolean) => void
  children?: ReactNode
}

const RecipeSearchBar: FC<Props> = ({
  hamburgerMenuButtonWasClicked,
  setHamburgerMenuButtonWasClicked,
  children,
}) => {
  const [windowSize, setWindowSize] = useState(0)

  const windowIsSmallAndButtonWasClicked =
    (windowSize <= 768 && hamburgerMenuButtonWasClicked) || windowSize > 768

  useEffect(() => {
    if (window?.innerWidth > 768) {
      setHamburgerMenuButtonWasClicked(true)
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        setHamburgerMenuButtonWasClicked(false)
      }
      setWindowSize(window.innerWidth)
    })

    return () => {
      window.removeEventListener('reset', () => {})
    }
  }, [setHamburgerMenuButtonWasClicked])

  return (
    <div id="searchBarFormContainer" hidden={!windowIsSmallAndButtonWasClicked}>
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
        id="searchBarForm"
      >
        <div id="searchBarContainer">
          <input
            name="recipeSearch"
            type="text"
            placeholder="chocolate chip cookies"
            id="searchBarInput"
          ></input>
          <button id="searchBarButton">Search</button>
        </div>
      </form>
      {children}
    </div>
  )
}

export default RecipeSearchBar
