import Link from 'next/link'
import Image from 'next/image'

import { FC, useState } from 'react'

import RecipeSearchBar from './RecipeSearchBar'

const Nav: FC = () => {
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
        </div>
      </div>
      <RecipeSearchBar
        hamburgerMenuButtonWasClicked={hamburgerMenuButtonWasClicked}
        setHamburgerMenuButtonWasClicked={setHamburgerMenuButtonWasClicked}
      />
    </nav>
  )
}

export default Nav
