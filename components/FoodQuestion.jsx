import Link from 'next/link'

const Option = (props) => (
  <button
    className="h-28 w-28 border-0 rounded-xl m-2 flex items-center justify-center  text-teal-100 bg-blueGray-700 hover:bg-blueGray-300 hover:text-teal-700 hover:border hover:border-blueGray-800 drop-shadow-2xl"
    {...props}
  />
)

const FoodQuestion = ({ id, data, length, handleIngredientOption, handleSubmit }) => {
  return (
    <div id={id} className="h-screen w-5/6 flex flex-col justify-center items-center">
      <div className="h-auto text-3xl p-2 mb-10 bg-gray-100 bg-opacity-50 border rounded-lg">
        {data.question}
      </div>
      <div className="flex justify-center w-2/3">
        <div className="flex flex-wrap">
          {data.options.map((option, index) => {
            return (
              <Option key={option + index} onClick={handleIngredientOption} value={option}>
                {option}
              </Option>
            )
          })}
        </div>
      </div>
      <div className="mt-10">
        <Link href={`/quiz#${id - 1}`}>
          <button className="w-32 h-12 p-2 mr-2 bg-rose-300 rounded-lg hover:bg-rose-400 drop-shadow-3xl">
            &#8592; Previous
          </button>
        </Link>
        {length !== id ? (
          <Link href={`/quiz#${id + 1}`}>
            <button className="w-24 h-12 p-2 bg-teal-300 rounded-lg hover:bg-teal-400 drop-shadow-3xl">
              Next &#8594;
            </button>
          </Link>
        ) : (
          <button
            className="w-32 h-12 pl-4 pr-4 m-1 bg-teal-300 rounded-lg hover:bg-green-300 drop-shadow-3xl"
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
