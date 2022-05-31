import Link from 'next/link'
import { FC, MouseEvent } from 'react'

interface Props {
  id: string
  data: {
    question: string
    options: string[]
  }
  length: number
  handleIngredientOption: (event: MouseEvent<HTMLButtonElement>) => void
  handleSubmit: () => void
  submitIsDisabled: boolean
}

const FoodQuestion: FC<Props> = ({
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
        <Link href={`/quiz#${+id - 1}`} passHref>
          <button className="previousButton">&#8592; Previous</button>
        </Link>
        {length.toString() !== id ? (
          <Link href={`/quiz#${+id + 1}`} passHref>
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
