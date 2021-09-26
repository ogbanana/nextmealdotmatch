import React, { useState } from 'react'
import Nav from '../components/Nav'

const Option = (props) => (
  <button className="h-28 w-28 border rounded m-2 flex items-center justify-center" {...props} />
)

const SelectedItem = (props) => (
  <button className="h-28 w-28 border rounded m-2 flex items-center justify-center" {...props} />
)

const Quiz = () => {
  const [selection, setSelection] = useState('')

  const handleOption = (event) => {
    setSelection(event.target.value)
  }

  const deselect = () => {
    setSelection('')
  }

  const questions = [
    'How much time do you have for this meal?',
    'What dairy do you have?',
    'What meats and/or proteins do you have?',
    'What seafood do you have?',
    'What vegetable(s) do you have?',
    'What fruit(s) do you have?',
    'What grain(s) and pasta do you have?',
  ]

  return (
    <>
      <Nav />
      <div className="flex w-screen overflow">
        <div className="border w-1/3 h-4/6 ml-10 mt-28 fixed">
          {selection && <SelectedItem onClick={deselect}>{selection}</SelectedItem>}
        </div>
        <div className="h-auto w-full flex items-end flex-col">
          <div className="h-screen w-2/3 flex flex-col justify-center">
            <div className="flex justify-center items-center text-3xl">{questions[0]}</div>
            <div className="flex justify-center">
              <Option onClick={handleOption} value={'30 Minutes'}>
                30 Minutes
              </Option>
              <Option onClick={handleOption} value={'60 Minutes'}>
                60 Minutes
              </Option>
              <Option onClick={handleOption} value={'90 Minutes'}>
                90 Minutes
              </Option>
            </div>
            <div className="flex justify-end">
              <button className="w-auto h-10 p-2">Next &gt;</button>
            </div>
          </div>

          <div className="h-screen w-2/3 flex flex-col justify-center">
            <div className="flex justify-center text-3xl">{questions[1]}</div>
            <div className="flex justify-center">
              <Option onClick={handleOption} value={'30 Minutes'}>
                30 Minutes
              </Option>
              <Option onClick={handleOption} value={'60 Minutes'}>
                60 Minutes
              </Option>
              <Option onClick={handleOption} value={'90 Minutes'}>
                90 Minutes
              </Option>
            </div>
            <div className="flex justify-end">
              <button className="w-auto h-10 p-2 flex ">Next &gt;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
