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
    className="h-28 w-28 m-1 border rounded flex items-center justify-center bg-green-200"
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
        <div className="w-11/12 h-full flex items-center justify-center">
          <div className="w-11/12 h-5/6 bg-opacity-50 bg-white flex items-center mt-5 rounded-xl border-4">
            <div className="w-full h-full flex items-center justify-center">
              <div className="border w-7/12 h-5/6 bg-cuttingboard-image bg-no-repeat bg-cover rounded-3xl justify-center items-center">
                <div className="flex h-auto w-auto justify-center items-center">
                  <div className="flex flex-wrap m-1 w-10/12">
                    {time && <SelectedItem onClick={deselectTime}>{time}</SelectedItem>}
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
              <Link href="/quiz#0">
                <button type="button" className="mr-28">
                  Back To Top
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
