export function formatQuery({
  userIngredients,
  time,
}: {
  userIngredients: string[]
  time: string
}) {
  const foodQuery = userIngredients.join('&').toLowerCase()
  const timeQuery = `&time=${time.slice(0, 2)}`
  return foodQuery + timeQuery
}
