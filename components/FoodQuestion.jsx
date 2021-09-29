import Link from 'next/link'

const Option = (props) => (
  <button
    className="h-28 w-28 border rounded-xl m-2 flex items-center justify-center bg-green-300"
    {...props}
  />
)

const FoodQuestion = ({ id, data, length, handleIngredientOption, handleSubmit }) => {
  return (
    <div id={id} className="h-screen w-5/6 flex flex-col justify-center items-center">
      <div className="flex justify-center text-3xl pb-14">{data.question}</div>
      <div className="flex flex-wrap justify-center w-2/3">
        {data.options.map((option, index) => {
          return (
            <Option key={option + index} onClick={handleIngredientOption} value={option}>
              {option}
            </Option>
          )
        })}
      </div>
      <div className="mt-10">
        <Link href={`/quiz#${id - 1}`}>
          <button className="w-28 h-10 p-2 m-1 bg-indigo-300 rounded-lg">&#8592; Previous</button>
        </Link>
        {length !== id ? (
          <Link href={`/quiz#${id + 1}`}>
            <button className="w-20 h-10 p-2 m-1 bg-indigo-300 rounded-lg">Next &#8594;</button>
          </Link>
        ) : (
          <button className="w-20 h-10 p-2 m-1 bg-indigo-300 rounded-lg" onClick={handleSubmit}>
            Done &#10003;
          </button>
        )}
      </div>
    </div>
  )
}

export default FoodQuestion
