import Link from 'next/link'

const Option = (props) => (
  <button
    className="h-28 w-28 border rounded-xl m-2 flex items-center justify-center bg-green-300"
    {...props}
  />
)

const TimeQuestion = ({ handleTimeOption }) => {
  const timeOption = {
    question: 'How much time do you have for this meal?',
    options: ['30 Minutes', '60 Minutes', '90 Minutes'],
  }

  return (
    <div id={0} className="h-screen w-5/6 flex flex-col justify-center items-center">
      <div className="flex justify-center text-3xl pb-14">{timeOption.question}</div>
      <div className="flex flex-wrap justify-center w-2/3">
        {timeOption.options.map((option, index) => {
          return (
            <Option key={option + index} onClick={handleTimeOption} value={option}>
              {option}
            </Option>
          )
        })}
      </div>
      <div className="mt-10">
        <Link href="/quiz#1">
          <button className="w-20 h-10 p-2 bg-indigo-300 rounded-lg">Next &#8594;</button>
        </Link>
      </div>
    </div>
  )
}

export default TimeQuestion
