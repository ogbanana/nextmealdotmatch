import Link from 'next/link'
import Router from 'next/router'

import { FC, MouseEvent, useContext, useEffect, useState } from 'react'

import Nav from '../components/Nav'
import FoodQuestion from '../components/FoodQuestion'
import TimeQuestion from '../components/TimeQuestion'

import data from '../utils/data.json'
import { formatQuery } from '../utils/helpers'

import { SelectedIngredientsContext } from '../context/state'
import CuttingBoard from '../components/CuttingBoard'

const Quiz: FC = () => {
  const { userIngredients, setUserIngredients, userTime, setUserTime } = useContext(
    SelectedIngredientsContext,
  )

  const [renderCuttingBoardInNav, setRenderCuttingBoardInNav] = useState(false)

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

  useEffect(() => {
    if (window?.location?.pathname === '/quiz' && window?.innerWidth < 768) {
      setRenderCuttingBoardInNav(true)
    }
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        setRenderCuttingBoardInNav(false)
        return
      }
      setRenderCuttingBoardInNav(true)
    })
    return () => {
      window.removeEventListener('reset', () => {})
    }
  }, [])

  return (
    <>
      <Nav numIngredients={userIngredients.length}>
        {renderCuttingBoardInNav && (
          <CuttingBoard
            renderInNav={renderCuttingBoardInNav}
            userTime={userTime}
            deselectTime={deselectTime}
            userIngredients={userIngredients}
            deselectIngredient={deselectIngredient}
            handleSubmit={handleSubmit}
            clearBoard={clearBoard}
          />
        )}
      </Nav>
      <div id="quizScreen">
        <div id="questionsBackground">
          <div id="questionsContainer">
            <div id="screenLeft">
              <CuttingBoard
                userTime={userTime}
                deselectTime={deselectTime}
                userIngredients={userIngredients}
                deselectIngredient={deselectIngredient}
                handleSubmit={handleSubmit}
                clearBoard={clearBoard}
              />
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
