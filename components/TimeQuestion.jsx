import Link from 'next/link'

const Option = (props) => (
  <button
    className="h-28 w-28 border rounded-xl m-2 flex items-center justify-center  text-teal-100 bg-blueGray-700 hover:bg-blueGray-300 hover:text-teal-700 hover:border-blueGray-800 drop-shadow-2xl"
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
      <div className="h-auto text-3xl p-8 mb-10 bg-gray-100 bg-opacity-50 border-2 rounded-lg">
        {timeOption.question}
      </div>
      <div className="flex justify-center w-2/3">
        <div className="flex flex-wrap">
          {timeOption.options.map((option, index) => {
            return (
              <Option key={option + index} onClick={handleTimeOption} value={option}>
                {option}
              </Option>
            )
          })}
        </div>
      </div>
      <div className="mt-10">
        <Link href="/quiz#1" passHref>
          <button className="w-28 h-12 p-2 bg-green-300 rounded-lg hover:bg-green-400 drop-shadow-3xl">
            Next &#8594;
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TimeQuestion
