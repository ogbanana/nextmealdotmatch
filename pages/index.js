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
      <div className="w-screen h-screen flex justify-end items-center">
        <div className="w-4/12 flex mr-20 flex-col">
          <span className="flex text-center justify-center text-4xl mb-2 text-green-400">
            Welcome to Meal.Match
          </span>
          <span className="text-center mb-8">
            Have items in your pantry but not sure what to make? Fill out our short quiz to see
            recipies that match what you have, not what you need.
          </span>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col m-2 w-1/2 justify-center items-center">
              <span>Been here before?</span>
              <Link href="/quiz" passHref>
                <a className="bg-green-300 p-2 rounded-lg w-28 text-center">Start Quiz</a>
              </Link>
            </div>
            <div className="flex flex-col m-2 w-1/2 justify-center items-center">
              <span>First time here?</span>
              <Link href="/guided-tour" passHref>
                <a className="bg-green-300 p-2 rounded-lg w-28 text-center">Take A Tour</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
