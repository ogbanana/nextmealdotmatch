import twilioClient from '../../twilio/client'

export default async function handler(
  req: { body: { toNumber: string; message: string } },
  res: { send: (arg0: any) => void },
) {
  const twilioNumber = process.env.TWILIO_PHONE_NUMBER

  if (!twilioNumber) return

  try {
    const { toNumber, message } = req.body

    const { errorMessage } = await twilioClient.messages.create({
      from: twilioNumber,
      to: toNumber,
      body: message,
    })

    if (errorMessage) {
      res.send({ status: 500, message: 'There was an error sending the message' })
    }

    res.send({ status: 200, message: 'Message sent successfully' })
  } catch (error) {
    res.send({ status: 500, message: error })
  }
}
