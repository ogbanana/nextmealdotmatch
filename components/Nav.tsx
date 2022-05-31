import Link from 'next/link'
import Image from 'next/image'

import { FC, ReactNode, useState } from 'react'

import RecipeSearchBar from './RecipeSearchBar'

interface Props {
  children?: ReactNode
  numIngredients?: number
}

const Nav: FC<Props> = ({ children, numIngredients }) => {
  const [hamburgerMenuButtonWasClicked, setHamburgerMenuButtonWasClicked] = useState(false)

  function toggleSearchBar() {
    setHamburgerMenuButtonWasClicked(!hamburgerMenuButtonWasClicked)
  }

  return (
    <nav id="navContainer">
      <div id="menuContainer">
        <Link href="/" passHref>
          <div id="logoContainer">
            <h1>Meal.Match</h1>
          </div>
        </Link>
        <div id="hamburgerMenu">
          <button onClick={toggleSearchBar} type="button">
            <Image
              src="/images/menu-icon.png"
              alt="Picture of the hamburger menu"
              width={30}
              height={30}
            />
          </button>
          {numIngredients > 0 && (
            <div className="ml-2 text-xs rounded-3xl bg-yellow-200 p-1 mb-1">{numIngredients}</div>
          )}
        </div>
      </div>
      <RecipeSearchBar
        hamburgerMenuButtonWasClicked={hamburgerMenuButtonWasClicked}
        setHamburgerMenuButtonWasClicked={setHamburgerMenuButtonWasClicked}
      >
        {children}
      </RecipeSearchBar>
    </nav>
  )
}

export default Nav
