import Link from 'next/link'
import { FC, MouseEvent } from 'react'

interface Props {
  handleTimeOption: (event: MouseEvent<HTMLButtonElement>) => void
}

const TimeQuestion: FC<Props> = ({ handleTimeOption }) => {
  const timeOption = {
    question: 'How much time do you have for this meal?',
    options: ['30 Minutes', '60 Minutes', '90 Minutes'],
  }

  return (
    <div id="0" className="quizQuestionContainer">
      <div className="quizQuestion">{timeOption.question}</div>
      <div className="quizOptions">
        <div className="quizOptionsContainer">
          {timeOption.options.map((option, index) => {
            return (
              <button
                key={option + index}
                className="option"
                onClick={handleTimeOption}
                value={option}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
      <div className="mt-10">
        <Link href="/quiz#1" passHref>
          <button className="nextButton">Next &#8594;</button>
        </Link>
      </div>
    </div>
  )
}

export default TimeQuestion
