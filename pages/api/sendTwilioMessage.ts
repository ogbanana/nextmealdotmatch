import twilioClient from '../../twilio/client'

export default async function handler(req, res) {
  const twilioNumber = process.env.TWILIO_PHONE_NUMBER

  if (!twilioNumber) return

  return await twilioClient.messages.create({
    from: twilioNumber,
    to: '+15162799762',
    body: 'You just sent an SMS from TypeScript using Twilio!',
  })
}
