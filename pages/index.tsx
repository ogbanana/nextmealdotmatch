/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

import Nav from '../components/Nav'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>MealDotMatch Next</title>
      </Head>
      <Nav />
      <div id="homePageContainer">
        <div id="homePageTextBox">
          <span id="homePageTitle">Welcome to Meal.Match</span>
          <span id="homePageDescription">
            Have items in your pantry but not sure what to make? Fill out our short quiz to see
            recipies that match what you have, not what you need.
          </span>
          <div id="homePageButtonContainer">
            <Link href="/quiz" passHref>
              <button className="homePageButton">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
