import Link from 'next/link'

import RecipeSearchBar from './RecipeSearchBar'

const Nav = () => {
  return (
    <nav className="w-full flex justify-between border-b absolute top-0 z-50 bg-opacity-50 bg-gray-100">
      <Link href="/" passHref>
        <div className="text-4xl p-4 text-center cursor-pointer ml-20"> Meal.Match </div>
      </Link>
      <RecipeSearchBar />
    </nav>
  )
}

export default Nav
