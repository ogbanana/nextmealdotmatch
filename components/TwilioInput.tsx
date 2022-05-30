import React, { FC, useState } from 'react'
import { formatPhoneNumber, removePhoneCharacters } from '../utils/helpers'
import { IngredientRender } from '../pages/selectedRecipe'

interface Props {
  missingIngredients: IngredientRender[]
}

const TwilioInput: FC<Props> = ({ missingIngredients }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [sendMessageStatus, setSendMessageStatus] = useState<number | null>(null)
  const [phoneFormatError, setFormatError] = useState<boolean | string | undefined>(false)

  const handleInput = (event) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value)

    if (!formattedPhoneNumber || formattedPhoneNumber.length === 0) {
      setFormatError(false)
      setPhoneNumber(formattedPhoneNumber)
      return
    }

    console.log(formattedPhoneNumber.length)
    if (formattedPhoneNumber.length < 14) {
      setFormatError('Please include 9 digits')
      setPhoneNumber(formattedPhoneNumber)
      return
    }

    setFormatError(false)
    setPhoneNumber(formattedPhoneNumber)
  }

  const sendText = async () => {
    if (!phoneNumber) {
      return
    }

    let formattedNumber = removePhoneCharacters(phoneNumber)

    const formattedMissingIngredients = missingIngredients.map(
      (ingredient) => `-${ingredient.ingredientName}\n`,
    )

    const { status } = await fetch('/api/sendTwilioMessage', {
      body: JSON.stringify({
        toNumber: formattedNumber,
        message: formattedMissingIngredients.join(' '),
      }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })

    if (status === 500) {
      setSendMessageStatus(500)
    }

    if (status === 200) {
      setSendMessageStatus(200)
    }
  }

  let statusText = ''
  if (sendMessageStatus === 200) {
    statusText = 'Message sent successfully!'
  } else if (sendMessageStatus === 500) {
    statusText = 'The message was not sent'
  }
  console.log(phoneFormatError)
  return (
    <div className="flex flex-col ">
      <input
        className="h-10 rounded-lg border pl-2 m-2  "
        type="tel"
        pattern="[+]{1}[0-9]{11,14}"
        placeholder="555 555-5555"
        required
        onChange={(event) => handleInput(event)}
        value={phoneNumber}
      ></input>
      {}

      <label className={phoneFormatError ? 'text-sm pl-2 mt-2 text-red-500' : ''}>
        {phoneFormatError}
      </label>
      <button
        disabled={phoneFormatError ? true : false}
        onClick={sendText}
        className="border p-1 h-10 rounded-lg bg-green-300 ml-2 mb-2 md:mb-0 hover:bg-green-400"
        type="button"
      >
        Text me!
      </button>
      <label
        className={
          sendMessageStatus === 200
            ? 'text-sm pl-2 mt-2 text-green-500'
            : 'text-sm pl-2 mt-2 text-red-500'
        }
      >
        {statusText}
      </label>
    </div>
  )
}

export default TwilioInput
