import sampleData from '../../utils/data.json'

export default async function handler(req, res) {
  if (process.env.ENVIRONMENT === 'DEV' && process.env.USE_MOCK_DATA === 'TRUE') {
    return { hits: sampleData }
  }

  const { foodQuery } = req.body

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
    `app_id=${process.env.APP_ID}`,
    `app_key=${process.env.APP_KEY}`,
    `q=${foodQuery}`,
    `${queryParams}`,
  ].join('&')

  try {
    const data = await fetch(url)
    const json = await data.json()
    res.send(json)
  } catch (err) {
    console.error(err)
  }
}
