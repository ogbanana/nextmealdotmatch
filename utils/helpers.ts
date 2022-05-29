import sampleData from '../sampleData.json'

export async function getRecipes(foodQuery: string) {
  if (
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' &&
    process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'TRUE'
  ) {
    return { hits: sampleData }
  }

  const queryParams = [
    'random=true',
    'field=url',
    'field=label',
    'field=image',
    'imageSize=LARGE',
    'field=ingredientLines',
    'field=calories',
    'field=totalTime',
  ].join('&')

  //Recipes API: https://developer.edamam.com/edamam-docs-recipe-api#/
  const url = [
    'https://api.edamam.com/api/recipes/v2?type=public',
    `app_id=${process.env.NEXT_PUBLIC_APP_ID}`,
    `app_key=${process.env.NEXT_PUBLIC_APP_KEY}`,
    `q=${foodQuery}`,
    `${queryParams}`,
  ].join('&')

  try {
    const data = await fetch(url)
    const json = await data.json()
    return json
  } catch (err) {
    console.error(err)
  }
}

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
