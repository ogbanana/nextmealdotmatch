/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head'
import Link from 'next/link'

import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>MealDotMatch Next</title>
      </Head>
      <Nav />
      <div className="w-screen h-screen flex justify-end items-center bg-homepage-full bg-no-repeat bg-cover">
        <div className="w-6/12 flex pr-48 flex-col">
          <span className="flex text-center justify-center text-5xl mb-2 text-green-500 bold">
            Welcome to Meal.Match
          </span>
          <span className="text-center mb-20 text-lg">
            Have items in your pantry but not sure what to make? Fill out our short quiz to see
            recipies that match what you have, not what you need.
          </span>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col w-full justify-center items-center">
              <Link href="/quiz" passHref>
                <a className="bg-green-300 p-4 mt-2 rounded-lg w-30 drop-shadow-lg text-center">
                  Start Quiz
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
