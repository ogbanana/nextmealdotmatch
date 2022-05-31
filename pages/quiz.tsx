import Link from 'next/link'
import Router from 'next/router'

import { FC, MouseEvent, useState, useContext } from 'react'

import Nav from '../components/Nav'
import FoodQuestion from '../components/FoodQuestion'
import TimeQuestion from '../components/TimeQuestion'

import data from '../utils/data.json'
import { formatQuery } from '../utils/helpers'

import { SelectedIngredientsContext } from '../context/state'

const Quiz: FC = () => {
  const { userIngredients, setUserIngredients, userTime, setUserTime } = useContext(
    SelectedIngredientsContext,
  )

  const handleTimeOption = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    setUserTime(button.value)
  }

  const deselectTime = () => {
    setUserTime('')
  }

  const handleIngredientOption = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    if (!userIngredients.includes(button.value)) {
      setUserIngredients([...userIngredients, button.value])
    }
  }

  const deselectIngredient = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement
    setUserIngredients(userIngredients.filter((item) => item !== button.value))
  }

  const handleSubmit = async () => {
    if (!userTime) throw new Error('Please select a time!')
    if (userIngredients.length < 1) throw new Error('Please adds some ingredients')

    const foodQuery = formatQuery({ userIngredients, userTime })

    Router.push({
      pathname: '/results',
      query: { foodQuery },
    })
  }

  const clearBoard = () => {
    setUserIngredients([])
    setUserTime('')
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
                  <div id="selectedTimeContainer">
                    {userTime && (
                      <button onClick={deselectTime} type="button" id="selectedTime">
                        Selected Time: {userTime}
                      </button>
                    )}
                    <div className="w-5/6 h-full flex items-center justify-center mt-8">
                      <div className="flex flex-wrap w-full h-full pl-4">
                        {userIngredients.length > 0 &&
                          userIngredients.map((ingredient, index) => {
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
                    disabled={!userTime}
                    id={!userTime ? 'submitNowDisabled' : 'submitNow'}
                    onClick={handleSubmit}
                  >
                    Submit Now
                  </button>
                  <button onClick={clearBoard} id="clearBoardButton" type="button">
                    Clear Board
                  </button>
                </div>
              </div>
            </div>

            <div id="screenRight">
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
                    submitIsDisabled={!userTime}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {/* <Link href="/quiz#0" passHref>
          <button type="button" id="backToTopButton">
            Back To Top
          </button>
        </Link> */}
      </div>
    </>
  )
}

export default Quiz
