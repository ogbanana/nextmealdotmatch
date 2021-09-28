import Link from 'next/link'

import RecipeSearchBar from './RecipeSearchBar'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between border-b static">
      <Link href="/">
        <div className="text-4xl p-2 text-center cursor-pointer"> Meal.Match </div>
      </Link>
      <RecipeSearchBar />
    </nav>
  )
}

export default Nav
