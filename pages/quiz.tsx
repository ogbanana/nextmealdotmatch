import Link from 'next/link'
import Router from 'next/router'
import React, { FC, MouseEvent, useState } from 'react'

import FoodQuestion from '../components/FoodQuestion'
import Nav from '../components/Nav'
import TimeQuestion from '../components/TimeQuestion'
import data from '../utils/data.json'
import { formatQuery } from '../utils/helpers'

const Quiz: FC = () => {
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleTimeOption = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    setTime(button.value)
  }

  const deselectTime = () => {
    setTime('')
  }

  const handleIngredientOption = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    if (!ingredients.includes(button.value)) {
      setIngredients([...ingredients, button.value])
    }
  }

  const deselectIngredient = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    setIngredients(ingredients.filter((item) => item !== button.value))
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

      <div id="quizScreen">
        <div id="questionsBackground">
          <div id="questionsContainer">
            <div id="screenLeft">
              <div id="cuttingBoard" className="scrollbar">
                <div id="selectedItemsContainers">
                  <div className="text-lg mt-4 mb-4 flex flex-col items-center justify-center w-full">
                    {time && (
                      <button
                        onClick={deselectTime}
                        type="button"
                        className="bg-gray-200 bg-opacity-80 border-2 p-2 rounded-lg"
                      >
                        Selected Time: {time}
                      </button>
                    )}
                    <div className="w-5/6 h-full flex items-center justify-center mt-8">
                      <div className="flex flex-wrap w-full h-full pl-4">
                        {ingredients.length > 0 &&
                          ingredients.map((ingredient, index) => {
                            return (
                              <button
                                id="selectedItem"
                                key={ingredient + index}
                                value={ingredient}
                                onClick={deselectIngredient}
                              >
                                {ingredient}
                              </button>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submitButton">
                  <button
                    disabled={!time}
                    id={!time ? 'submitNowDisabled' : 'submitNow'}
                    onClick={handleSubmit}
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-full overflow-scroll">
              <TimeQuestion handleTimeOption={handleTimeOption} />
              {data.map((question, idx) => {
                return (
                  <FoodQuestion
                    key={`${idx}${question}`}
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
