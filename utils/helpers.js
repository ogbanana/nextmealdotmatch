export async function getRecipes(query) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&random=true&field=label&field=image&imageSize=LARGE&app_id`

  try {
    const data = await fetch(url)
    const json = await data.json()
    console.log(json)
  } catch (err) {
    console.error(err)
  }
}

export function formatQuery(...params) {
  let foodQuery = ''
  let timeQuery = ''
  params.forEach((item) => {
    item = item.toLowerCase()
    if (!item.includes('minutes')) {
      foodQuery += item + '%20'
    } else {
      timeQuery += `&time=${item.slice(0, 2)}`
    }
  })
  const query = foodQuery + timeQuery
  return query
}
