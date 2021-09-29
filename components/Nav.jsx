import Link from 'next/link'

import RecipeSearchBar from './RecipeSearchBar'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between border-b fixed">
      <Link href="/">
        <div className="text-4xl p-4 text-center cursor-pointer ml-20"> Meal.Match </div>
      </Link>
      <RecipeSearchBar />
    </nav>
  )
}

export default Nav
