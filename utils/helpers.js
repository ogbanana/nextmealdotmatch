import sampleData from '../sampleData.json'

export async function getRecipes(query) {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV') {
    return { hits: sampleData }
  }
  console.log('THE FINAL QUERY', query)
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&random=true&field=url&field=label&field=image&imageSize=LARGE&app_id`
  try {
    const data = await fetch(url)
    const json = await data.json()
    return json
  } catch (err) {
    console.error(err)
  }
}

export function formatQuery({ ingredients, time }) {
  const foodQuery = ingredients.join('&').toLowerCase()
  const timeQuery = `&time=${time.slice(0, 2)}`
  return foodQuery + timeQuery
}
