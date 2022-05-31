import React, { FC, MouseEvent } from 'react'

interface Props {
  userTime: string
  deselectTime: () => void
  userIngredients: string[]
  deselectIngredient: (event: MouseEvent<HTMLButtonElement>) => void
  handleSubmit: () => void
  clearBoard: () => void
  renderInNav?: boolean
}
const CuttingBoard: FC<Props> = ({
  userTime,
  deselectTime,
  userIngredients,
  deselectIngredient,
  handleSubmit,
  clearBoard,
  renderInNav,
}) => {
  return (
    <div id={renderInNav ? 'cuttingBoardNav' : 'cuttingBoard'} className="scrollbar">
      <div id="selectedItemsContainers">
        <div id="selectedTimeContainer">
          {userTime && (
            <button onClick={deselectTime} type="button" id="selectedTime">
              Selected Time: {userTime}
            </button>
          )}
          <div className="w-5/6 h-full flex items-center justify-center md:mt-8 mt-0">
            <div className="flex flex-wrap w-full pl-4 max-h-36 md-max-h-full overflow-auto md:overflow-visible ">
              {userIngredients.length > 0 &&
                userIngredients.map((ingredient, index) => {
                  return (
                    <button
                      id="selectedItem"
                      key={ingredient + index}
                      value={ingredient}
                      onClick={deselectIngredient}
                    >
                      {ingredient}
                    </button>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="submitButton">
        <button
          disabled={!userTime}
          id={!userTime ? 'submitNowDisabled' : 'submitNow'}
          onClick={handleSubmit}
        >
          Submit Now
        </button>
        <button onClick={clearBoard} id="clearBoardButton" type="button">
          Clear Board
        </button>
      </div>
    </div>
  )
}

export default CuttingBoard
