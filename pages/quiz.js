import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'

import FoodQuestion from '../components/FoodQuestion'
import Nav from '../components/Nav'
import TimeQuestion from '../components/TimeQuestion'
import data from '../utils/data.json'
import { formatQuery } from '../utils/helpers'

const SelectedItem = (props) => (
  <button
    className="h-24 w-24 border-0 rounded-xl m-1 flex items-center justify-center  text-teal-100 bg-blueGray-700 hover:bg-blueGray-300 hover:text-teal-700 hover:border hover:border-blueGray-800 drop-shadow-2xl"
    {...props}
  />
)

const Quiz = () => {
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleTimeOption = (event) => {
    setTime(event.target.value)
  }

  const deselectTime = () => {
    setTime('')
  }

  const handleIngredientOption = (event) => {
    if (!ingredients.includes(event.target.value)) {
      setIngredients([...ingredients, event.target.value])
    }
  }

  const deselectIngredient = (event) => {
    setIngredients(ingredients.filter((item) => item !== event.target.value))
  }

  const handleSubmit = async () => {
    if (!time) throw new Error('Please select a time!')
    if (ingredients.length < 1) throw new Error('Please adds some ingredients')

    const query = formatQuery({ ingredients, time })

    Router.push({
      pathname: '/results',
      query: { query },
    })
  }

  return (
    <>
      <Nav />

      <div className="h-screen w-screen bg-kitchen-image bg-cover bg-no-repeat flex justify-center">
        <div className="w-full h-full bg-opacity-50 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-7/12 h-5/6 bg-cuttingboard-image bg-no-repeat mt-20 bg-cover rounded-3xl justify-center items-center drop-shadow-3xl">
                <div className="bg-warmGray-300 bg-opacity-20 rounded-3xl w-full h-full">
                  <div className="flex flex-col h-auto w-auto justify-center items-center">
                    <div className="text-lg mt-4 mb-4">
                      {time && (
                        <button
                          onClick={deselectTime}
                          type="button"
                          className="bg-gray-200 bg-opacity-80 border-2 pl-2 pr-2 rounded-lg"
                        >
                          Selected Time: {time}
                        </button>
                      )}
                    </div>
                    <div className="w-5/6 h-full flex items-center justify-center">
                      <div className="flex flex-wrap w-full h-full pl-4">
                        {ingredients.length > 0 &&
                          ingredients.map((ingredient, index) => {
                            return (
                              <SelectedItem
                                key={ingredient + index}
                                value={ingredient}
                                onClick={deselectIngredient}
                              >
                                {ingredient}
                              </SelectedItem>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full overflow-scroll">
              <TimeQuestion handleTimeOption={handleTimeOption} />
              {data.map((question, idx) => {
                return (
                  <FoodQuestion
                    key={idx + question}
                    id={idx}
                    data={question}
                    length={data.length - 1}
                    handleIngredientOption={handleIngredientOption}
                    handleSubmit={handleSubmit}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <Link href="/quiz#0" passHref>
          <button
            type="button"
            className="w-32 h-12 p-2 mr-2 bg-green-300 rounded-lg hover:bg-rose-400 drop-shadow-3xl absolute bottom-0"
          >
            Back To Top
          </button>
        </Link>
      </div>
    </>
  )
}

export default Quiz
