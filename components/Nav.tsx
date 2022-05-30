import Link from 'next/link'
import Image from 'next/image'
import { FC, useState } from 'react'

import RecipeSearchBar from './RecipeSearchBar'

const Nav: FC = () => {
  const [hamburgerMenuButtonWasClicked, setHamburgerMenuButtonWasClicked] = useState(true)

  function toggleSearchBar() {
    setHamburgerMenuButtonWasClicked(!hamburgerMenuButtonWasClicked)
  }

  return (
    <nav className="w-full flex flex-col md:flex-row sm:items-center justify-between border-b absolute top-0 z-50 bg-opacity-50 bg-gray-100">
      <div className="flex w-full">
        <Link href="/" passHref>
          <div className="text-4xl p-4 text-center cursor-pointer md:ml-20 ">
            <h1>Meal.Match</h1>
          </div>
        </Link>
        <button onClick={toggleSearchBar} className="md:hidden w-full" type="button">
          <Image src="/menu-icon.png" alt="Picture of the author" width={30} height={30} />
        </button>
      </div>
      <RecipeSearchBar
        hamburgerMenuButtonWasClicked={hamburgerMenuButtonWasClicked}
        setHamburgerMenuButtonWasClicked={setHamburgerMenuButtonWasClicked}
      />
    </nav>
  )
}

export default Nav
