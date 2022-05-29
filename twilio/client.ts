import { exit } from 'process'
import { Twilio } from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_TOKEN
const twilioNumber = process.env.TWILIO_PHONE_NUMBER

if (!accountSid || !authToken || !twilioNumber) {
  exit()
}

const twilioClient = new Twilio(accountSid, authToken)

export default twilioClient
