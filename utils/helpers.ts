export function formatQuery({
  userIngredients,
  userTime,
}: {
  userIngredients: string[]
  userTime: string
}) {
  const foodQuery = userIngredients.join('&').toLowerCase()
  const timeQuery = `&time=${userTime.slice(0, 2)}`
  return foodQuery + timeQuery
}

export function formatPhoneNumber(value: string) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '')

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 4) return phoneNumber

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

export function removePhoneCharacters(phoneNumber: string) {
  let formattedNumber = phoneNumber.replaceAll('-', '')
  formattedNumber = formattedNumber.replaceAll(' ', '')
  formattedNumber = formattedNumber.replaceAll('(', '')
  formattedNumber = formattedNumber.replaceAll(')', '')
  return `+1${formattedNumber}`
}
