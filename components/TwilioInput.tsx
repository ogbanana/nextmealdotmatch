import React, { FC, useState } from 'react'
import { formatPhoneNumber, removePhoneCharacters } from '../utils/helpers'
import { IngredientRender } from '../pages/selectedRecipe'

import Expire from './Expire'

interface Props {
  missingIngredients: IngredientRender[]
}

const TwilioInput: FC<Props> = ({ missingIngredients }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [sendMessageStatus, setSendMessageStatus] = useState<number | null>(null)
  const [phoneFormatError, setFormatError] = useState<boolean | string | undefined>(false)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value)

    if (!formattedPhoneNumber || formattedPhoneNumber.length === 0) {
      setFormatError(false)
      setPhoneNumber(formattedPhoneNumber)
      return
    }

    if (formattedPhoneNumber.length < 14) {
      setFormatError('Please include 10 digits')
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

    setSendMessageStatus(status)
  }

  let statusText = ''
  if (sendMessageStatus === 200) {
    statusText = 'Message sent successfully!'
  } else if (sendMessageStatus === 500) {
    statusText = 'The message was not sent'
  }

  return (
    <div id="twilioInputContainer">
      <input
        id="phoneNumberInput"
        type="tel"
        pattern="[+]{1}[0-9]{11,14}"
        placeholder="555 555-5555"
        required
        onChange={(event) => handleInput(event)}
        value={phoneNumber}
      ></input>
      <label id={phoneFormatError ? 'errorText' : ''}>{phoneFormatError}</label>
      <button
        id="sendTextButton"
        type="button"
        disabled={phoneFormatError ? true : false}
        onClick={sendText}
      >
        Text me!
      </button>
      {sendMessageStatus && (
        <Expire setSendMessageStatus={setSendMessageStatus} delay={3000}>
          <label id={sendMessageStatus === 200 ? 'successText' : 'errorText'}>{statusText}</label>
        </Expire>
      )}
    </div>
  )
}

export default TwilioInput
