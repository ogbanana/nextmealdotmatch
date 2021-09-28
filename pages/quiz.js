import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'

import FoodQuestion from '../components/FoodQuestion'
import Nav from '../components/Nav'
import TimeQuestion from '../components/TimeQuestion'
import data from '../utils/data.json'
import { formatQuery } from '../utils/helpers'

const SelectedItem = (props) => (
  <button className="h-28 w-28 m-1 border rounded flex items-center justify-center" {...props} />
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
      <div className="flex w-screen overflow">
        <div className="border w-4/12 h-2/3 fixed mt-28 ml-10">
          <div className="flex h-auto w-full justify-center">
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
        <div className="h-auto w-full flex items-end flex-col">
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
    </>
  )
}

export default Quiz
