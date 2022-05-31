import Link from 'next/link'

const Option = (props) => (
  <button
    className="h-28 w-28 border-0 rounded-xl m-2 flex items-center justify-center  text-teal-100 bg-blueGray-700 hover:bg-blueGray-300 hover:text-teal-700 hover:border hover:border-blueGray-800 drop-shadow-2xl"
    {...props}
  />
)

const FoodQuestion = ({
  id,
  data,
  length,
  handleIngredientOption,
  handleSubmit,
  submitIsDisabled,
}) => {
  return (
    <div id={id} className="quizQuestionContainer">
      <div className="quizQuestion">{data.question}</div>
      <div className="quizOptions">
        <div className="quizOptionsContainer">
          {data.options.map((option, index) => {
            return (
              <button
                key={option + index}
                className="option"
                onClick={handleIngredientOption}
                value={option}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
      <div className="mt-10">
        <Link href={`/quiz#${id - 1}`} passHref>
          <button className="previousButton">&#8592; Previous</button>
        </Link>
        {length !== id ? (
          <Link href={`/quiz#${id + 1}`} passHref>
            <button className="nextButton">Next &#8594;</button>
          </Link>
        ) : (
          <button
            disabled={submitIsDisabled}
            className={
              submitIsDisabled
                ? 'w-32 h-12 pl-4 pr-4 m-1 bg-gray-300 rounded-lg cursor-not-allowed'
                : 'w-32 h-12 pl-4 pr-4 m-1 bg-green-300 rounded-lg hover:bg-green-300 drop-shadow-3xl'
            }
            onClick={handleSubmit}
          >
            Done &#10003;
          </button>
        )}
      </div>
    </div>
  )
}

export default FoodQuestion
